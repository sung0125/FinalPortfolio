import Link from "next/link";

export default function SecondSemester() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">2024년 2학기 시간표</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-3 w-20">시간</th>
                            <th className="border p-3 w-48">월</th>
                            <th className="border p-3 w-48">화</th>
                            <th className="border p-3 w-48">수</th>
                            <th className="border p-3 w-48">목</th>
                            <th className="border p-3 w-48">금</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-3 text-center h-24">9</td>
                            <td className="border p-3 bg-red-200">
                                <Link href="/packet" className="hover:underline">
                                    패킷분석및공격대응
                                </Link>
                                <br />
                                C6-0833
                            </td>
                            <td className="border p-3 bg-teal-200">
                                <Link href="/webprogrem" className="hover:underline">
                                    웹서버보안프로그래밍
                                </Link>
                                <br />
                                C6-0815
                            </td>
                            <td className="border p-3 bg-orange-200">
                                <Link href="/information" className="hover:underline">
                                    개인정보보호와보안윤리
                                </Link>
                                <br />
                                C7-0109
                            </td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                        </tr>
                        <tr>
                            <td className="border p-3 text-center h-24">10</td>
                            <td className="border p-3 bg-red-200">
                                <Link href="/packet" className="hover:underline">
                                    패킷분석및공격대응
                                </Link>
                                <br />
                                C6-0833
                            </td>
                            <td className="border p-3 bg-teal-200">
                                <Link href="/webprogrem" className="hover:underline">
                                    웹서버보안프로그래밍
                                </Link>
                                <br />
                                C6-0815
                            </td>
                            <td className="border p-3 bg-orange-200">
                                <Link href="/information" className="hover:underline">
                                    개인정보보호와보안윤리
                                </Link>
                                <br />
                                C7-0109
                            </td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                        </tr>
                        <tr>
                            <td className="border p-3 text-center h-24">11</td>
                            <td className="border p-3 bg-yellow-200">
                                <Link href="/applied" className="hover:underline">
                                    정보보호응용실습
                                </Link>
                                <br />
                                C6-0832
                            </td>
                            <td className="border p-3 bg-red-200">
                                <Link href="/packet" className="hover:underline">
                                    패킷분석및공격대응
                                </Link>
                                <br />
                                C6-0833
                            </td>
                            <td className="border p-3 bg-purple-200">
                                보안알고리즘
                                <br />
                                C6-0831
                            </td>
                            <td className="border p-3 bg-blue-200">
                                <Link href="/forensic" className="hover:underline">
                                    디지털포렌식
                                </Link>
                                <br />
                                C6-0833
                            </td>
                            <td className="border p-3"></td>
                        </tr>
                        {/* 나머지 시간대들... */}
                        <tr>
                            <td className="border p-3 text-center h-24">12</td>
                            <td className="border p-3 bg-yellow-200">
                                <Link href="/applied" className="hover:underline">
                                    정보보호응용실습
                                </Link>
                                <br />
                                C6-0832
                            </td>
                            <td className="border p-3 bg-green-200">
                                <Link href="/securityp" className="hover:underline">
                                    보안프로그래밍
                                </Link>
                                <br />
                                C6-0832
                            </td>
                            <td className="border p-3 bg-purple-200">
                                보안알고리즘
                                <br />
                                C6-0831
                            </td>
                            <td className="border p-3 bg-blue-200">
                                <Link href="/forensic" className="hover:underline">
                                    디지털포렌식
                                </Link>
                                <br />
                                C6-0833
                            </td>
                            <td className="border p-3"></td>
                        </tr>
                        <tr>
                            <td className="border p-3 text-center h-24">1</td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                            <td className="border p-3"></td>
                        </tr>
                        <tr>
                            <td className="border p-3 text-center h-24">2</td>
                            <td className="border p-3 bg-green-200">
                                <Link href="/securityp" className="hover:underline">
                                    보안프로그래밍
                                </Link>
                                <br />
                                C6-0832
                            </td>
                            <td className="border p-3 bg-yellow-200">
                                <Link href="/applied" className="hover:underline">
                                    정보보호응용실습
                                </Link>
                                <br />
                                C6-0832
                            </td>
                            <td className="border p-3"></td>
                            <td className="border p-3 bg-teal-200">
                                <Link href="/webprogrem" className="hover:underline">
                                    웹서버보안프로그래밍
                                </Link>
                                <br />
                                C6-0815
                            </td>
                            <td className="border p-3"></td>
                        </tr>
                        <tr>
                            <td className="border p-3 text-center h-24">3</td>
                            <td className="border p-3 bg-green-200">
                                <Link href="/securityp" className="hover:underline">
                                    보안프로그래밍
                                </Link>
                                <br />
                                C6-0832
                            </td>
                            <td className="border p-3 bg-yellow-200">
                                <Link href="/applied" className="hover:underline">
                                    정보보호응용실습
                                </Link>
                                <br />
                                C6-0832
                            </td>
                            <td className="border p-3"></td>
                            <td className="border p-3 bg-teal-200">
                                <Link href="/webprogrem" className="hover:underline">
                                    웹서버보안프로그래밍
                                </Link>
                                <br />
                                C6-0815
                            </td>
                            <td className="border p-3"></td>
                        </tr>
                        <tr>
                            <td className="border p-3 text-center h-24">4</td>
                            <td className="border p-3"></td>
                            <td className="border p-3 bg-blue-200">
                                <Link href="/forensic" className="hover:underline">
                                    디지털포렌식
                                </Link>
                                <br />
                                C6-0833
                            </td>
                            <td className="border p-3"></td>
                            <td className="border p-3 bg-purple-200">
                                보안알고리즘
                                <br />
                                C6-0831
                            </td>
                            <td className="border p-3"></td>
                        </tr>
                        <tr>
                            <td className="border p-3 text-center h-24">5</td>
                            <td className="border p-3"></td>
                            <td className="border p-3 bg-blue-200">
                                <Link href="/forensic" className="hover:underline">
                                    디지털포렌식
                                </Link>
                                <br />
                                C6-0833
                            </td>
                            <td className="border p-3"></td>
                            <td className="border p-3 bg-purple-200">
                                보안알고리즘
                                <br />
                                C6-0831
                            </td>
                            <td className="border p-3"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
