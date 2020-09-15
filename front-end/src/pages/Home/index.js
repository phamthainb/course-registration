import React from 'react'
import Footer from '../../components/Footer';
import Menu from '../../components/Menu'
import NewsItem from '../../components/NewsItem';
import './style.css';

function Home() {

    const news = [
        {
            title: "Ngày 14/09/2020:  THÔNG BÁO: v/v ĐỀ NGHỊ  SINH VIÊN RÀ SOÁT CÁC HỌC PHẦN CỦA HỌC KỲ 1 (2020-2021)",
            content: "Theo kế hoạch đã thông báo, Phòng giáo vụ đã hoàn thành việc tổ chức cho sinh viên các khóa đăng ký học kỳ 1 năm học 2020-2021, đã tiếp nhận, xem xét và xử lý Đơn xin bổ sung, rút bớt học phần của tất cả sinh viên có Đơn. Phòng giáo vụ đề nghị tất cả các sinh viên truy nhập hệ thống qldt và rà soát lại các học phần đã đăng ký tham gia học tập trong kỳ học của cá nhân, có vấn đề gì thắc mắc, sinh viên liên hệ Phòng giáo vụ - tấng 1 nhà A1 (Thầy Minh) trong 2 ngày 15 và 16/09/2020 (thứ 3 và thứ 4) để phối hợp giải quyết."
        },
        {
            title: "Ngày 28/08/2020: THÔNG BÁO: v/v ĐĂNG KÝ HỌC GHÉP và ĐIỀU CHỈNH ĐĂNG KÝ HỌC KỲ 1 (2020-2021)",
            content: "Thực hiện kế hoạch đăng ký học ghép (Học lại, học cải thiện điểm) và điều chỉnh đăng ký học kỳ 1 năm học 2020-2021, Phòng giáo vụ thông báo Thời gian và một số điều sinh viên các khóa cần lưu ý khi đăng ký."
        },
        {
            title: "Thông báo: V/v Cập nhật lịch học online học kỳ hè năm học 2019-2020",
            content: ""
        },
        {
            title: "Thông báo:  V/v Đăng ký thời khóa biểu học kỳ phụ (hè) năm học 2019 - 2020",
            content: ""
        },
        {
            title: "Thông báo:  v/v Đăng ký học phần thực tập tốt nghiệp các ngành khối kỹ thuật - khóa 2016",
            content: ""
        }
    ]

    const mapNewsItem = news.map((item, index)=>{
        return(
            <NewsItem key={index} newsItem={item}></NewsItem>
        )
    })

    return(
        <div>
            <Menu></Menu>
            <div className="news-section p-4">
                <h2 className="mb-3">News</h2>
                {mapNewsItem}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;