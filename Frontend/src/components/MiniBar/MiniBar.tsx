import React from 'react';

interface Props {
    text: string;
}

const MiniBar: React.FC<Props> = ({ text }) => {
    return (
        <div className="relative">
            <div className='bg-[#f7f7f7] h-[180px] py-[50px]'>
                <div className="bg-[#B6191F] p-4 h-[80px] relative">
                    <span className="bg-[#f7f7f7] text-[#846316] px-8 py-2 bottom-0 left-20 h-[10] rounded-t-md text-[20px] absolute ">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MiniBar