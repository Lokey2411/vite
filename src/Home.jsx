import { Link } from "react-router-dom";
import './Home.css'
import'./Main.css'
import './themify-icons/themify-icons.css'
const Home = () => {
  return (
    <div>
       <div class="navbar">
        <ul class="navbar-top line background-main padding-10">
          <li class=""><a href="#">Lãnh đạo |</a></li>
          <li class=""><a href="">Phòng |</a></li>
          <li class=""><a href="#">Khoa |</a></li>
          <li class=""><a href="#">TT Đào tạo |</a></li>
          <li class=""><a href="#">TT Dịch vụ |</a></li>
          <li class=""><a href="#">Viện nghiên cứu |</a></li>
          <li class=""><a href="#">Letco |</a></li>
          <li class=""><a href="#">Trường ngoại ngữ- Du lịch |</a></li>
          <li class=""><a href="#">Đoàn thể |</a></li>
          <li class=""><a href="#">Tạp chí KH&CN |</a></li>
          <li class=""><a href="#">Thư viện |</a></li>
          <li class=""><a href="#">Thư điện tử |</a></li>
          <li class=""><a href="#">Sitemap</a></li>
        </ul>
        <ul class="navbar-bot line padding-30">
            <li class="logo"><a href="#" class="upper text-main"><img src="logo-ngang.webp" alt=""/></a></li>
            <li><a href="#" class="upper text-main"><i class="ti-home"></i>Giới thiệu</a></li>
            <li><a href="#" class="upper text-main"><i class=""></i>Tuyển sinh</a></li>
            <li><a href="#" class="upper text-main">Đào tạo<i class="ti-angle-down"></i></a></li>
            <li><a href="#" class="upper text-main">Khoa học công nghệ</a></li>
            <li><a href="#" class="upper text-main"><i class=""></i>Hướng nghiệp</a></li>
            <li><a href="#" class="upper text-main">Sinh viên<i class="ti-angle-down"></i></a></li>
            <li><a href="#" class="upper text-main"><i class=""></i>EGOV</a></li>
            <li><a href="#" class="upper text-main"><img src="vn.png" alt=""/></a></li>
            <li><a href="#" class="upper text-main"><img src="en.png" alt=""/></a></li>
        </ul>
      </div>
      <div class="container">
        <img src="ufi2700.jpg" alt=""/>
        <ul class="line">
            <li class="background-main upper padding-30">Khảo thí</li>
            <li class="background-main upper padding-30">Đảm bảo chất lượng</li>
            <li class="background-main upper padding-30">Hợp tác doanh nghiệp</li>
            <li class="background-main upper padding-30">Hợp tác quốc tế</li>
            <li class="background-main upper padding-30">Đại học điện tử</li>
            <li class="background-main upper padding-30">Văn bản pháp luật</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
