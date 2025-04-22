interface OAuthBtnProps {
    onClick: () => void;
    src: string;
    label: string;
  }
  
  const OAuthBtn: React.FC<OAuthBtnProps> = ({ onClick, src, label }) => {
    return (
      <button className='flex justify-center items-center border-2' onClick={onClick}>
        <div className='border-r-2'>
          <img className='w-5 h-5 m-2' src={src} alt={label} />
        </div>
        <p className='mx-4 font-bold text-sm md:text-lg'>{label}</p>
      </button>
    );
  };

export default OAuthBtn;
  