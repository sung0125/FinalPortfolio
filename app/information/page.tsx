import LectureViewer from "@/components/LectureViewer";

const informationFiles = [
    { id: 1, title: "아이디어 공모전 서식", pdfUrl: "/pdfs/information/아이디어 공모전 서식 10조.pdf" },
    { id: 2, title: "세부 내용 제안서", pdfUrl: "/pdfs/information/세부 내용 제안서_10조.pdf" },
    { id: 3, title: "발표자료", pdfUrl: "/pdfs/information/개인정보보호와보안윤리10조.pdf" },
];

export default function ForensicPage() {
    return <LectureViewer title="개인정보보호와보안윤리" files={informationFiles} />;
}
