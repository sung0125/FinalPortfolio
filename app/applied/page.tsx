import LectureViewer from "@/components/LectureViewer";

const appliedFiles = [{ id: 1, title: "프로젝트", pdfUrl: "/pdfs/applied/정보보호응용실습.pdf" }];

export default function appliedPage() {
    return <LectureViewer title="보안프로그래밍" files={appliedFiles} />;
}
