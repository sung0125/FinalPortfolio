import LectureViewer from "@/components/LectureViewer";

const webprogremFiles = [
    { id: 1, title: "강의 개요", pdfUrl: "/pdfs/webprogrem/1-강의개요.pdf" },
    { id: 2, title: "웹개발환경구축", pdfUrl: "/pdfs/webprogrem/2-웹개발환경구축.pdf" },
    { id: 3, title: "nextjs", pdfUrl: "/pdfs/webprogrem/3-nextjs소개.pdf" },
    { id: 4, title: "mongodb", pdfUrl: "/pdfs/webprogrem/4-mongodbCRUD.pdf" },
    { id: 5, title: "쇼핑몰예제", pdfUrl: "/pdfs/webprogrem/5-ecommerce.pdf" },
];

export default function ForensicPage() {
    return <LectureViewer title="웹프로그래밍" files={webprogremFiles} />;
}
