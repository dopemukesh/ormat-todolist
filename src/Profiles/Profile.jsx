import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        bio: '',
        profilePic: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        // Get user data from localStorage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            navigate('/login');
            return;
        }

        // Get full user data including password from users array
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === currentUser.email);

        if (!user) {
            navigate('/login');
            return;
        }

        setUserData(user);
        setFormData({
            name: user.name || '',
            email: user.email || '',
            password: user.password || '',
            bio: user.bio || '',
            profilePic: user.profilePic || ''
        });
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevState => ({
                    ...prevState,
                    profilePic: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        try {
            // Get all users
            const users = JSON.parse(localStorage.getItem('users') || '[]');

            // Check if email changed and already exists
            const emailExists = users.some(user =>
                user.email === formData.email && user.email !== userData.email
            );

            if (emailExists) {
                setError('Email already exists');
                return;
            }

            // Update user in users array
            const updatedUsers = users.map(user => {
                if (user.email === userData.email) {
                    return {
                        ...user,
                        ...formData
                    };
                }
                return user;
            });

            // Update users in localStorage
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            // Update current user
            localStorage.setItem('currentUser', JSON.stringify({
                name: formData.name,
                email: formData.email,
                bio: formData.bio,
                profilePic: formData.profilePic
            }));

            setUserData({ ...formData });
            setIsEditing(false);
        } catch (err) {
            setError('Failed to update profile');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 w-full md:max-w-xl py-8 px-4 sm:px-6 select-none">
            <div className="max-w-lg mx-auto">
                <div className="bg-white shadow rounded-2xl p-6 overflow-clip border">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
                        <button
                            onClick={handleLogout}
                            className="text-sm text-red-600 hover:text-red-500"
                        >
                            Logout
                        </button>
                    </div>

                    {error && (
                        <div className="mb-4 text-sm text-red-600 text-center">
                            {error}
                        </div>
                    )}

                    {/* Profile Picture Section */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <img
                                src={userData.profilePic || 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                            />
                            {isEditing && (
                                <label className="absolute bottom-0 right-0 bg-emerald-500 p-2 rounded-full cursor-pointer hover:bg-emerald-600">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </label>
                            )}
                        </div>
                    </div>

                    {isEditing ? (
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-emerald-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-emerald-500 p-2 border"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-emerald-500 p-2 border"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                        Bio
                                    </label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        rows={3}
                                        value={formData.bio}
                                        onChange={handleChange}
                                        className="outline-none border-gray-300 shadow-sm focus:border-emerald-500 p-2 border mt-1 block w-full rounded-md "
                                    />
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-md"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                                <p className="mt-1 text-sm text-gray-900">{userData.name}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                <p className="mt-1 text-sm text-gray-900">{userData.email}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Password</h3>
                                <div className="relative">
                                    <p className="mt-1 text-sm text-gray-900">
                                        {showPassword ? userData.password : '********'}
                                    </p>
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-0 right-0 text-sm text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                                <p className="mt-1 text-sm text-gray-900 rounded-md">{userData.bio || 'No bio added yet.'}</p>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-md"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
