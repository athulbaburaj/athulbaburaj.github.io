
import React from 'react';
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
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-lg">

                <h1 className="font-hero text-4xl md:text-5xl text-primary mb-5 leading-none">
                    CONFIDENTIAL.
                </h1>

                <div className="border-t border-hairline pt-8 mb-5">
                    <div className="grid md:grid-cols-[120px_1fr] gap-x-8 gap-y-2">
                        <FaFilePdf className="text-2xl text-muted" />
                        <div>
                            <h2 className="text-xl font-bold text-primary mb-2">Course Description Document</h2>
                            <p className="text-secondary text-sm leading-relaxed mb-6 measure">
                                Authorized personnel only. Contains detailed syllabus and admission requirements.
                            </p>

                            <button
                                onClick={handleDownload}
                                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary underline decoration-faint underline-offset-4 hover:text-secondary transition-colors"
                            >
                                <FaFileDownload className="text-xs" />
                                <span>Download PDF</span>
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-muted uppercase tracking-widest">
                    Restricted Access // Admissions Committee
                </p>
            </div>
        </div>
    );
};

export default SecretDocPage;
