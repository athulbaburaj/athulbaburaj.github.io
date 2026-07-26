
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
            <div className="w-full max-w-lg flow">

                <h1 className="font-hero t-h1 text-primary mb-5 leading-none">
                    CONFIDENTIAL.
                </h1>

                <div className="border-t border-hairline pt-8 mb-5">
                    <div className="kv">
                        <FaFilePdf className="t-h2 text-muted" />
                        <div>
                            <h2 className="t-h3 font-bold text-primary mb-2">Course Description Document</h2>
                            <p className="text-secondary t-body leading-relaxed mb-6 measure">
                                Authorized personnel only. Contains detailed syllabus and admission requirements.
                            </p>

                            <button
                                onClick={handleDownload}
                                className="group inline-flex items-center gap-2 t-body font-bold uppercase tracking-widest text-primary underline decoration-faint underline-offset-4 hover:text-secondary transition-colors"
                            >
                                <FaFileDownload className="t-small" />
                                <span>Download PDF</span>
                            </button>
                        </div>
                    </div>
                </div>

                <p className="t-small text-muted uppercase tracking-widest">
                    Restricted Access // Admissions Committee
                </p>
            </div>
        </div>
    );
};

export default SecretDocPage;
