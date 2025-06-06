import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type FormMode = 'signin' | 'signup';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignupLogin: React.FC = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState<FormMode>('signin');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const userType = localStorage.getItem('userType') || 'user';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/access-denied');
        }, 1500);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const toggleMode = () => {
        setMode(mode === 'signin' ? 'signup' : 'signin');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-950 text-white flex items-center justify-center p-4">
            <motion.div
                className="w-full max-w-md"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="mb-8 flex flex-col items-center text-center"
                    variants={itemVariants}
                >
                    <h1 className="text-3xl font-bold mb-2">
                        {mode === 'signin' ? 'Welcome back' : 'Create your account'}
                    </h1>
                    <p className="text-gray-400 mb-2">
                        {mode === 'signin'
                            ? 'Sign in to continue as a'
                            : 'Sign up to join as a'}
                        <span className="font-medium text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 ml-2">
                            {userType === 'startup' ? 'Startup' : 'Investor'}
                        </span>
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-dark-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8"
                    variants={itemVariants}
                >
                    {mode === 'signup' && (
                        <motion.div
                            className="mb-4"
                            variants={itemVariants}
                        >
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <User size={18} />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-700 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                    placeholder="John Doe"
                                />
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        className="mb-4"
                        variants={itemVariants}
                    >
                        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <Mail size={18} />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-700 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-black placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                placeholder="example@email.com"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-6"
                        variants={itemVariants}
                    >
                        <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <Lock size={18} />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-700 border border-gray-600 rounded-lg py-3 pl-10 pr-10 text-black placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </motion.div>

                    <motion.button
                        type="submit"
                        className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center ${loading ? 'bg-gray-600' : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/20'
                            } transition-all duration-200`}
                        variants={itemVariants}
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-gray-300 border-t-white rounded-full animate-spin mr-2"></div>
                        ) : null}
                        {loading ? 'Processing...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
                    </motion.button>

                    <motion.div
                        className="mt-6 text-center text-sm"
                        variants={itemVariants}
                    >
                        <p className="text-gray-400">
                            {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
                            <button
                                type="button"
                                onClick={toggleMode}
                                className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                            >
                                {mode === 'signin' ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </motion.div>
                </motion.form>

                <motion.div
                    className="mt-8 text-center"
                    variants={itemVariants}
                >
                    <button
                        onClick={() => navigate('/selection')}
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        <span>Back to selection</span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Background elements */}
            <motion.div
                className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary-500/5 blur-3xl"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="fixed bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-500/5 blur-3xl"
                animate={{
                    y: [0, 20, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 9,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
        </div>
    );
};

export default SignupLogin;