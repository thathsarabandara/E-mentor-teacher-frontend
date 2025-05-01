import SectionCard from '@/component/SectionCard/SectionCard';
import { Button } from '@/component/ui/Button'
import { CancelButton } from '@/component/ui/CancelButton';
import axios from 'axios';
import React, { useState } from 'react'

interface Section{
    id: number;
    title: string;
    contents: ContentItem[];
}

export interface ContentItem {
    id: number;
    type: 'text' | 'video' | 'file' | 'quiz';
    title: string;
    content: string;
}

const data: Section[] =[{
    id: 1 ,
    title: 'Section 1',
    contents: [
        {
            id: 1,
            type: 'video',
            title: 'Introduction to Web',
            content: 'introVideo.mp4',
        }
    ]
},
{
    id: 2 ,
    title: 'Section 2',
    contents: [
        {
            id: 2,
            type: 'video',
            title: 'HTML',
            content: 'introVideo.mp4',
        }
    ]
}]

const Curriculum = () => {
    const [sectionData, setSectionData] = useState<Section[]>(data);
    const [addSectionCardVisible, setaddSectionCardVisible] = useState<boolean>(false);
    const [newSectionTitle, setNewSectionTitle] = useState<string>('');

    const handleSection = ()=>{
        setaddSectionCardVisible(true)
    }

    const handleAddSection = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newSectionTitle.trim()) return;
      
        const newSection = { title: newSectionTitle, contents: [] };
      
        try {
        //   const response = await axios.post('/api/sections', newSection);
            const responsedata = {id:3, title: newSectionTitle, contents: []}
          setSectionData([...sectionData, responsedata]);
        } catch (err) {
          console.error('Failed to add section', err);
        }
      
        setNewSectionTitle('');
        setaddSectionCardVisible(false);
      }

    const handleEditSection = async (sectionId: number | null, editingSectionTitle: string) => {
        if (!editingSectionTitle.trim()) return;
      
        try {
        //   await axios.put(`/api/sections/${sectionId}`, { title: editingSectionTitle });
          setSectionData(
            sectionData.map((section) =>
              section.id === sectionId ? { ...section, title: editingSectionTitle } : section
            )
          );
        } catch (err) {
          console.error('Failed to edit section', err);
        }
    }

    const handleDeleteSection = async (sectionId: number| null) => {
        try {
        //   await axios.delete(`/api/sections/${sectionId}`);
          setSectionData(sectionData.filter((section) => section.id !== sectionId));
        } catch (err) {
          console.error('Failed to delete section', err);
        }
    }

  return (
    <div className="flex flex-col justify-center items-start w-full mt-4">
        <p className="text-xl font-semibold text-left border-b border-gray-200 w-full pb-5">Course Curriculam</p>
        <div className='flex flex-col justify-center items-center w-full mt-4'>
            {sectionData.map((section , index)=>(
                <SectionCard id={index+1} title={section.title} contents={section.contents} onEdit={handleEditSection} onDelete={handleDeleteSection} />
            ))}
            <Button onClick={()=> handleSection()} className='bg-orange-100'>
                Add Section
            </Button>
        </div>
        {addSectionCardVisible && (
            <div className='fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-transparent bg-opacity-50 w-full'>
                <div className="w-6/12 bg-white p-4">
                    <h5 className="font-bold w-full text-left mb-4 text-xl">Create Section</h5>
                    <form onSubmit={handleAddSection} className='w-full'>
                        <div className="flex flex-col justify-center items-start w-full">
                            <label htmlFor="sectionTitle" className='text-sm font-semibold'>Section Name</label>
                            <input
                                id='sectionTitle'
                                type='text'
                                value={newSectionTitle}
                                onChange={(e)=>setNewSectionTitle(e.target.value)}
                                className='border border-gray-400 w-full rounded p-1'
                            />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center w-full my-4">
                            <Button type='submit'>Save</Button>
                            <CancelButton onClick={()=> setaddSectionCardVisible(false)} className='bg-transparent'>cancel</CancelButton>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
  )
}

export default Curriculum