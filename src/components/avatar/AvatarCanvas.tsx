import React from 'react';
import avatarMale from '../../assets/avatar_male.png';
import avatarFemale from '../../assets/avatar_female.png';

interface AvatarCanvasProps {
    gender: 'male' | 'female';
}

const AvatarCanvas: React.FC<AvatarCanvasProps> = ({ gender }) => {
    const avatarImage = gender === 'female' ? avatarFemale : avatarMale;

    return (
        <div className="w-full h-full min-h-[400px] bg-gradient-to-b from-gray-900/10 to-gray-900/5 rounded-xl overflow-hidden relative flex items-center justify-center">
            <img
                src={avatarImage}
                alt={`${gender} avatar`}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default AvatarCanvas;
