import React, { useState } from 'react'
import { ContentItem } from '../CreateCourseSections/Curriculum/Curriculum'
import ContentCard from '../ContentCard/ContentCard'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBinLine } from 'react-icons/ri'
import { IoIosAdd } from 'react-icons/io'
import { Button } from '../ui/Button'
import { CancelButton } from '../ui/CancelButton'
import { isNullOrUndef } from 'chart.js/helpers'

interface SectionCardProps {
    id: number,
    title: string,
    contents: ContentItem[],
    onEdit: (sectionId: number | null , newName: string) => void,
    onDelete: (sectionId: number) => void,
    onAddContent?: (sectionId: number) => void,
}

const SectionCard: React.FC<SectionCardProps> = ({id,title, contents, onEdit, onDelete,onAddContent}) => {
    const [editSectionCardVisible, setEditSectionCardVisible] = useState<boolean>(false);
    const [addContentCardVisible, setAddContentCardVisible] = useState<boolean>(false);
    const [editingSectionId, setEditingSectionId] = useState<number | null>(null);
    const [editingSectionTitle, setEditingSectionTitle] = useState<string>('');
    const [newContentTitle, setNewContentTitle] = useState<string>('');
    const [newContentType, setNewContentType] = useState<string>('');
    const [newContentVideo, setNewContentVideo] = useState<File | null>(null);
    const [newContentText, setNewContentText] = useState<string>('');
    const [newContentFile, setNewContentFile] = useState<File | null >(null);
    const [newContentQuizId, setNewContentQuizId] = useState<string>('');


    const handleEditClick = (id:number) =>{
        setEditingSectionId(id)
        console.log(id)
        setEditingSectionTitle(title);
        setEditSectionCardVisible(true)
    }

    const handleEditFormSubmit = ( e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        onEdit(editingSectionId, editingSectionTitle)
        setEditSectionCardVisible(false);
    }

    const handleAddContent = () =>{
        setAddContentCardVisible(true);
    }

    const handleContentForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!newContentType || !newContentTitle) {
          alert('Please fill all fields')
          return
        }
      
        if (onAddContent) {
          onAddContent(id)
        }
        
        setNewContentTitle('')
        setNewContentType('')
        setAddContentCardVisible(false)
      }

      const handelAddContentCancel = () =>{
        setAddContentCardVisible(false);
      }

    const renderContent= ()=>{
        switch (newContentType) {
            case 'video':
                return (
                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="contentVideo" className="text-sm font-semibold">Upload Video</label>
                        <input 
                            id='contentVideo'
                            type='file'
                            content='video/*'
                            onChange={(e)=> setNewContentVideo(e.target.files?.[0] || null)}
                            placeholder='Choose the video file'
                            className='border border-gray-400 p-1 w-full'
                            required
                        />
                    </div>
                );
            case 'text':
                return (
                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="contentTitle" className="text-sm font-semibold">Content Text</label>
                        <textarea 
                            id='contentTitle'
                            rows={6}
                            value={newContentText}
                            onChange={(e)=> setNewContentText(e.target.value)}
                            placeholder='Enter Content Text'
                            className='border border-gray-400 p-1 w-full'
                            required
                        />
                    </div>
                );
            case 'file':
                return (
                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="contentFile" className="text-sm font-semibold">Upload Video</label>
                        <input 
                            id='contentFile'
                            type='file'
                            onChange={(e)=> setNewContentFile(e.target.files?.[0] || null)}
                            placeholder='Choose the video file'
                            className='border border-gray-400 p-1 w-full'
                            required
                        />
                    </div>
                );
            case 'quiz':
                return (
                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="quizId" className="text-sm font-semibold">Quiz ID</label>
                        <input 
                            id="quizId"
                            type="text"
                            value={newContentQuizId}
                            onChange={(e) => setNewContentQuizId(e.target.value)}
                            placeholder="Enter Existing Quiz ID"
                            className="border border-gray-400 p-1 w-full"
                        />
                        <p className="text-sm mt-2">
                            Don’t have a quiz?{' '}
                            <a href="/create-quiz" target="_blank" className="text-blue-600 underline hover:text-blue-800">Create a new quiz here</a>
                        </p>
                    </div>
                ) ;
            default:
                return <p className="font-semibold">Please select the content type</p> ;
        }
    }

  return (
    <div className='bg-gray-100 rounded w-full p-4 m-4'>
        <div className="flex justify-between items-center mb-4">
            <div className="flex justify-start items-center">
                <GiHamburgerMenu />
                <p className="font-semibold ml-4">{title}</p>
            </div>
            <div className="flex justify-center items-center space-x-4">
                <button className="text-gray hover:text-orange-500" onClick={()=> handleAddContent()}>
                    <IoIosAdd />
                </button>
                <button className="text-gray hover:text-orange-500" onClick={()=> handleEditClick(id)}>
                    <CiEdit />
                </button>
                <button className="text-gray hover:text-orange-500" onClick={() => onDelete(id)}>
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
        {contents.map((content, index)=>(
            <ContentCard id={index} type={content.type} title={content.title} content={content.content} />
        ))}
        {editSectionCardVisible && (
            <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-transparent bg-opacity-50 w-full'>
                <div className="w-6/12 bg-white p-4">
                    <h5 className="font-bold w-full text-left mb-4 text-xl">Edit Section Name</h5>
                    <form onSubmit={handleEditFormSubmit} className='w-full'>
                        <div className="flex flex-col justify-center items-start w-full">
                            <label htmlFor="sectionTitle" className='text-sm font-semibold'>New Section Name</label>
                                <input
                                    id='sectionTitle'
                                    type='text'
                                    value={editingSectionTitle}
                                    onChange={(e)=>setEditingSectionTitle(e.target.value)}
                                    className='border border-gray-400 w-full rounded p-1'
                                />
                            </div>
                            <div className="flex flex-row-reverse justify-between items-center w-full my-4">
                                <Button type='submit'>Save</Button>
                                <CancelButton onClick={()=> setEditSectionCardVisible(false)} className='bg-transparent'>cancel</CancelButton>
                            </div>
                    </form>
                </div>
            </div>
        )}
        {addContentCardVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-transparent bg-opacity-50 w-full">
                <div className="w-6/12 bg-white p-4">
                    <h5 className="font-bold w-full text-left mb-4 text-xl">Add Content</h5>
                    <form onSubmit={handleContentForm} className="w-full">
                        <div className="flex flex-col justify-center items-start w-full">
                            <label htmlFor="contentTitle" className="text-sm font-semibold">Content Title</label>
                            <input 
                                id='contentTitle'
                                type='text'
                                value={newContentTitle}
                                onChange={(e)=> setNewContentTitle(e.target.value)}
                                placeholder='Enter Content Title'
                                className='border border-gray-400 p-1 w-full'
                                required
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start w-full mt-2">
                            <label htmlFor="contentType" className="text-sm font-semibold">Content Type</label>
                            <select 
                                id="contentType"
                                className="border border-gray-400 p-1 w-full"
                                value={newContentType}
                                onChange={(e) => setNewContentType(e.target.value)}
                            >
                                <option value=''>Select Your Content Type</option>
                                <option value='video'>Video</option>
                                <option value='text'>Text</option>
                                <option value='file'>File</option>
                                <option value='quiz'>Quiz</option>
                            </select>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-2">{renderContent()}</div>
                        <div className="flex justify-between items-center">
                            <CancelButton onClick={handelAddContentCancel} >
                                Cancel
                            </CancelButton>
                            <Button type='submit'>
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
  )
}

export default SectionCard