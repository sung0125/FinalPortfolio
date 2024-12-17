import LectureViewer from "@/components/LectureViewer";

const packetAnalysisFiles = [
    { id: 1, title: "1주차 - c4", pdfUrl: "/pdfs/packet/C4.pdf" },
    { id: 2, title: "2주차 - c5", pdfUrl: "/pdfs/packet/C5.pdf" },
    { id: 3, title: "3주차 - c6", pdfUrl: "/pdfs/packet/C6.pdf" },
    { id: 4, title: "4주차 - c7", pdfUrl: "/pdfs/packet/C7.pdf" },
    { id: 5, title: "5주차 - c8", pdfUrl: "/pdfs/packet/C8.pdf" },
    { id: 6, title: "6주차 - c9", pdfUrl: "/pdfs/packet/C9.pdf" },
    { id: 7, title: "7주차 - c10", pdfUrl: "/pdfs/packet/C10.pdf" },
    { id: 8, title: "8주차 - c11", pdfUrl: "/pdfs/packet/C11.pdf" },
    { id: 9, title: "9주차 - email", pdfUrl: "/pdfs/packet/email.pdf" },
    { id: 10, title: "10주차 - protocol 구조", pdfUrl: "/pdfs/packet/Protocol 구조-4.pdf" },
];

export default function PacketPage() {
    return <LectureViewer title="패킷분석및공격대응" files={packetAnalysisFiles} />;
}
