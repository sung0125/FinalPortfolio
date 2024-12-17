import LectureViewer from "@/components/LectureViewer";

const digitalForensicsFiles = [
    { id: 1, title: "cmd명령어", pdfUrl: "/pdfs/forensics/cmd명령어 실습보고서 양식.pdf" },
    { id: 2, title: "sample1 덤프 분석", pdfUrl: "/pdfs/forensics/sample1 덤프 분석.pdf" },
    { id: 3, title: "sample2 덤프 분석", pdfUrl: "/pdfs/forensics/sample2 덤프 분석.pdf" },
    { id: 4, title: "sample3 덤프 분석", pdfUrl: "/pdfs/forensics/sample3 덤프 분석.pdf" },
    { id: 5, title: "volatility command", pdfUrl: "/pdfs/forensics/volatility command.pdf" },
    { id: 6, title: "WinDBG", pdfUrl: "/pdfs/forensics/WinDBG(프로세스은닉).pdf" },
    { id: 7, title: "레지스트리 분석", pdfUrl: "/pdfs/forensics/레지스트리 분석.pdf" },
    { id: 8, title: "레지스트리 하이브", pdfUrl: "/pdfs/forensics/레지스트리 하이브 구조 실습.pdf" },
    { id: 9, title: "PE", pdfUrl: "/pdfs/forensics/실습보고서 양식(PE_수정).pdf" },
    { id: 10, title: "RAW_", pdfUrl: "/pdfs/forensics/실습보고서 양식(RAW_수정).pdf" },
];

export default function ForensicPage() {
    return <LectureViewer title="디지털포렌식" files={digitalForensicsFiles} />;
}
