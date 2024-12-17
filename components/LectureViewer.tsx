"use client";
import { useState } from "react";

interface LectureFile {
    id: number;
    title: string;
    pdfUrl: string;
}

interface LectureViewerProps {
    title: string;
    files: LectureFile[];
}

const LectureViewer = ({ title, files }: LectureViewerProps) => {
    const [selectedFile, setSelectedFile] = useState<LectureFile | null>(files[0] || null);

    return (
        <div className="w-full">
            <div className="flex gap-4 p-2">
                {/* 왼쪽 목록 영역 - 더 작게 조정 */}
                <div className="w-[180px] shrink-0" style={{ marginLeft: "10px" }}>
                    <h1 className="text-xl font-bold mb-4">{title}</h1>
                    <div className="space-y-2">
                        {files.map((file) => (
                            <button
                                key={file.id}
                                onClick={() => setSelectedFile(file)}
                                className={`w-full text-left p-2 rounded text-sm ${
                                    selectedFile?.id === file.id ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                                }`}
                            >
                                {file.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PDF 뷰어 영역 - 여백 최소화 */}
                <div className="flex-1" style={{ marginRight: "10px" }}>
                    {selectedFile ? (
                        <iframe src={selectedFile.pdfUrl} className="w-full h-[65vh]" title={selectedFile.title} />
                    ) : (
                        <div className="w-full h-[65vh] flex items-center justify-center text-gray-500">
                            PDF를 선택해주세요
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LectureViewer;
