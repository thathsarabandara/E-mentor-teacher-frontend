import React from 'react'
import { FaVideo, FaImage, FaFileAlt, FaQuidditch } from 'react-icons/fa';
import { ContentItem } from '../CreateCourseSections/Curriculum/Curriculum';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';

const ContentCard: React.FC<ContentItem> = ({ type, title, content }) => {
  const renderIcon = () => {
    switch (type) {
      case 'video':
        return <FaVideo className="text-3xl text-orange-500" />;
      case 'text':
        return <FaImage className="text-3xl text-blue-500" />;
      case 'file':
        return <FaFileAlt className="text-3xl text-green-500" />;
      case 'quiz':
        return <FaQuidditch className="text-3xl text-green-500" />;
      default:
        return <FaFileAlt className="text-3xl text-gray-500" />;
    }
  };

  return (
    <div className="flex items-center p-4 rounded shadow space-x-4 w-full bg-white">
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center">
                <div>{renderIcon()}</div>
                <h4 className="ml-4">{title}</h4>
            </div>
            <div className="flex justify-center items-center space-x-4">
                <button className="text-gray hover:text-orange-500">
                    <CiEdit />
                </button>
                <button className="text-gray hover:text-orange-500">
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ContentCard;
