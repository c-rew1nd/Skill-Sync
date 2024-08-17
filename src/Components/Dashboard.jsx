import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        setIsModalOpen(true);
    };

    const handleLoginChoice = (choice) => {
        setIsModalOpen(false);
        if (choice === 'student') {
            navigate('/login');
        }
        if (choice === 'company') {
            navigate('/login');
        }
        
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="flex justify-between items-center bg-white p-4 shadow-md">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <button
                    onClick={handleProfileClick}
                    className="w-10 h-10 bg-white text-white rounded-full flex items-center justify-center hover:bg-white transition duration-300"
                >
                    <img
                        src="/Default-profile-icon.svg"
                        alt="Profile Icon"
                        className="w-9 h-9 text-white"
                    />
                </button>
            </header>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div
                        ref={modalRef}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <h2 className="text-xl text-center font-bold mb-4">Login As</h2>
                        <div className="flex justify-around">
                            <button
                                onClick={() => handleLoginChoice('student')}
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                Student
                            </button>
                            <button
                                onClick={() => handleLoginChoice('company')}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ml-3"
                            >
                                Company
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
