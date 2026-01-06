
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaFilePdf } from 'react-icons/fa';

const SecretDocPage = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Course_Description.pdf';
        link.download = 'Course_Description.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen pt-20 pb-20 flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 max-w-lg text-center">

                <h1 className="font-hero text-4xl md:text-5xl text-white tracking-tighter mb-8 leading-none">
                    CONFIDENTIAL.
                </h1>

                <div className="bg-subtle-gray p-8 md:p-12 mb-8">
                    <FaFilePdf className="text-4xl text-white mb-6 mx-auto" />
                    <h2 className="text-xl font-bold text-white mb-4">Course Description Document</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        Authorized personnel only. Contains detailed syllabus and admission requirements.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleDownload}
                        className="w-full py-4 bg-white text-obsidian font-bold uppercase tracking-widest hover:bg-electric-violet hover:text-white transition-colors flex items-center justify-center gap-3"
                    >
                        <FaFileDownload />
                        <span>Download PDF</span>
                    </motion.button>
                </div>

                <p className="text-xs text-gray-600 uppercase tracking-widest">
                    Restricted Access // Admissions Committee
                </p>
            </div>
        </div>
    );
};

export default SecretDocPage;
