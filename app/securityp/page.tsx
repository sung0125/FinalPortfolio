import LectureViewer from "@/components/LectureViewer";

const securitypFiles = [{ id: 1, title: "프로젝트", pdfUrl: "/pdfs/Security programming/보안프로그래밍.pdf" }];

export default function securitypPage() {
    return <LectureViewer title="보안프로그래밍" files={securitypFiles} />;
}
