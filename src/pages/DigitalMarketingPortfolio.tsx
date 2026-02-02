import React, { useEffect, useState, useRef } from 'react';
import {
  Menu,
  X,
  Calendar,
  Mail,
  MapPin,
  Briefcase,
  Target,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Facebook,
  Linkedin,
  ExternalLink,
  Code,
  TrendingUp,
  Award,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Images } from
'lucide-react';
// =========== TYPE DEFINITIONS ===========
type SectionId = 'gioi-thieu' | 'ky-nang' | 'kinh-nghiem' | 'lien-he';
type Skill = {
  id: number;
  name: string;
  icon: string;
  level: number;
  description: string;
};
type WorkExperience = {
  id: number;
  period: string;
  company: string;
  position: string;
  budget: string;
  color: string;
  achievements: string[];
  current: boolean;
};
type Project = {
  id: number;
  brand: string;
  logo: string;
  description: string;
  role: string;
  platform: string;
  industry: string;
  campaigns: string[];
  results: string[];
};
export function DigitalMarketingPortfolio() {
  // =========== STATE ===========
  const [activeSection, setActiveSection] = useState<SectionId>('gioi-thieu');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const sectionRefs = useRef<{
    [key: string]: HTMLElement | null;
  }>({});
  // =========== DATA: HERO ===========
  const heroData = {
    name: 'NGUYỄN HỮU LUẬT',
    birthDate: '19/05/2004',
    email: 'huuluat2005@gmail.com',
    phone: '0898025759',
    location: 'Ngũ Hành Sơn, Đà Nẵng',
    avatar:
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/avt.jpg?raw=true',
    avatarCaption: 'Fresher Digital Marketer',
    tagline: 'Meta Ads & Google Ads Specialist',
    description:
    '3+ năm kinh nghiệm quản lý ngân sách quảng cáo. Chuyên tối ưu ROI, A/B testing và scale chiến dịch hiệu quả.'
  };
  // =========== DATA: SKILLS ===========
  const skills: Skill[] = [
  {
    id: 1,
    name: 'Meta Ads (Facebook/Instagram)',
    icon: '📱',
    level: 95,
    description: 'Quản lý ngân sách, tối ưu ROI, A/B testing'
  },
  {
    id: 2,
    name: 'Google Ads & TikTok Ads',
    icon: '🎯',
    level: 85,
    description: 'Chiến dịch Search, Display, TikTok Ads, Telegram Ads'
  },
  {
    id: 3,
    name: 'SEO & Content Marketing',
    icon: '✍️',
    level: 90,
    description: 'Viết bài SEO chuẩn theo cấu trúc, tối ưu từ khóa'
  },
  {
    id: 4,
    name: 'Xây dựng kênh Social Media',
    icon: '📢',
    level: 88,
    description: 'Facebook, TikTok, Telegram channel building'
  },
  {
    id: 5,
    name: 'Frontend Development',
    icon: '💻',
    level: 85,
    description: 'HTML, CSS, JavaScript, ReactJS'
  },
  {
    id: 6,
    name: 'Backend & Database',
    icon: '🗄️',
    level: 80,
    description: 'NodeJS, MongoDB, SQL, Git/Github'
  },
  {
    id: 7,
    name: 'Analytics & Data Tracking',
    icon: '📈',
    level: 90,
    description: 'Google Analytics, Meta Pixel, Data Studio, UTM tracking'
  },
  {
    id: 8,
    name: 'Teamwork & Collaboration',
    icon: '🤝',
    level: 92,
    description: 'Làm việc nhóm hiệu quả, giao tiếp tốt'
  },
  {
    id: 9,
    name: 'Creative & Copywriting',
    icon: '🎨',
    level: 85,
    description: 'Thiết kế hình ảnh ads, viết copy conversion-focused'
  }];

  // =========== DATA: WORK EXPERIENCE ===========
  const workExperience: WorkExperience[] = [
  {
    id: 1,
    period: '10/2025 - 02/2026',
    company: 'Công ty TNHH truyền thông và công nghệ Go Media',
    position: 'Nhân viên Digital Marketing',
    budget: 'Đa dự án',
    color: '#C5A059',
    achievements: [
    'Tạo chiến dịch phân phối bài quảng cáo đến đúng tệp khách hàng',
    'Tối ưu ngân sách do công ty đưa ra',
    'Quản lý ngân sách phù hợp, lên ý tưởng bài viết để chạy quảng cáo',
    'Đánh giá và báo cáo độ hiệu quả của chiến dịch',
    'Viết bài SEO cho các dự án công ty đã giao',
    'Code giao diện WordPress cho các đối tác khách hàng'],

    current: true
  },
  {
    id: 2,
    period: '08/2023 - Hiện nay',
    company: 'NOUR Homé',
    position: 'Nhân viên Facebook Ads',
    budget: '90 triệu VNĐ/tháng',
    color: '#A7D397',
    achievements: [
    'Tạo chiến dịch phân phối bài quảng cáo đến đúng tệp khách hàng',
    'Kinh nghiệm tối ưu ngân sách',
    'Quản lý ngân sách phù hợp, thiết kế hình ảnh, lên ý tưởng bài viết',
    'Đánh giá và báo cáo độ hiệu quả của chiến dịch'],

    current: true
  },
  {
    id: 3,
    period: '03/2025 - 05/2025',
    company: 'Công ty TNHH WEBO',
    position: 'Thực tập sinh Digital Marketing',
    budget: '60 triệu VNĐ/tháng',
    color: '#E8D5B7',
    achievements: [
    'Tạo chiến dịch phân phối bài quảng cáo đến đúng tệp khách hàng',
    'Tối ưu ngân sách do công ty đưa ra',
    'Quản lý ngân sách phù hợp, thiết kế hình ảnh, lên ý tưởng bài viết',
    'Đánh giá và báo cáo độ hiệu quả của chiến dịch'],

    current: false
  },
  {
    id: 4,
    period: '01/2025 - 04/2025',
    company: 'Công Ty Xây Dựng Liên Minh Homes',
    position: 'Nhân viên Facebook Ads',
    budget: '65 triệu VNĐ/tháng',
    color: '#B8E6C4',
    achievements: [
    'Tạo chiến dịch phân phối bài quảng cáo đến đúng tệp khách hàng',
    'Kinh nghiệm tối ưu ngân sách',
    'Quản lý ngân sách phù hợp, thiết kế hình ảnh, lên ý tưởng bài viết',
    'Đánh giá và báo cáo độ hiệu quả của chiến dịch'],

    current: false
  },
  {
    id: 5,
    period: '01/2025 - 03/2025',
    company: 'Công Ty Du Lịch LA-Travel',
    position: 'Nhân viên Facebook Ads',
    budget: '90-110 triệu VNĐ/tháng',
    color: '#D4AF37',
    achievements: [
    'Tạo chiến dịch phân phối bài quảng cáo đến đúng tệp khách hàng',
    'Kinh nghiệm tối ưu ngân sách',
    'Quản lý ngân sách phù hợp, thiết kế hình ảnh, lên ý tưởng bài viết',
    'Đánh giá và báo cáo độ hiệu quả của chiến dịch'],

    current: false
  }];

  // =========== DATA: PROJECTS ===========
  const projects: Project[] = [
  {
    id: 1,
    brand: 'Do Agency',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/do_agency.jpg?raw=true',
    description:
    'Do Agency (doagency.vn) là công ty truyền thông mạng xã hội và Marketing hàng đầu tại miền Trung (Đà Nẵng), chuyên cung cấp các giải pháp Omni Channel, xây dựng kênh TikTok, vận hành TikTok Shop và sản xuất video ngắn.',
    role: 'Chạy quảng cáo',
    platform: 'Google Ads',
    industry: 'Marketing Agency',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Do%20Agency%20%C4%90%C3%A0%20N%E1%BA%B5ng.png?raw=true'],

    results: []
  },
  {
    id: 2,
    brand: 'Geely Nha Trang',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/geely_logo.jpg?raw=true',
    description:
    'Geely là tập đoàn ô tô đa quốc gia hàng đầu, hoạt động mạnh mẽ trong lĩnh vực sản xuất xe hơi, công nghệ di chuyển và năng lượng mới. Tại Việt Nam, Geely tập trung cung cấp các mẫu xe xăng và xe điện giàu công nghệ.',
    role: 'Chạy quảng cáo',
    platform: 'Meta Ads',
    industry: 'Automotive',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/GEELY.png?raw=true'],

    results: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/geely_fb.png?raw=true']

  },
  {
    id: 3,
    brand: 'Go Media',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/go_media.jpg?raw=true',
    description:
    'Go Media là đơn vị uy tín hoạt động trong lĩnh vực Truyền thông, Marketing và Công nghệ. Thương hiệu chuyên cung cấp các giải pháp tăng trưởng toàn diện cho doanh nghiệp.',
    role: 'Chạy quảng cáo, Code Website',
    platform: 'Meta Ads, WordPress',
    industry: 'Marketing & Technology',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Go%20Media%20Vietnam.png?raw=true',
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/content_go.png?raw=true',
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/web_go.png?raw=true'],

    results: []
  },
  {
    id: 4,
    brand: 'IZAKAYA Yoshino Shoten',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/izakaya_logo.jpg?raw=true',
    description:
    'IZAKAYA Yoshino Shoten là một nhà hàng Nhật Bản mang đậm phong cách văn hóa Izakaya truyền thống, chuyên cung cấp các trải nghiệm chuẩn vị Nhật với thực đơn phong phú.',
    role: 'Chạy quảng cáo, Content',
    platform: 'Meta Ads',
    industry: 'F&B - Japanese Restaurant',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/IZAKAYA%20Yoshino%20Shoten.png?raw=true'],

    results: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/iza_fb.png?raw=true',
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/iza_ig.png?raw=true']

  },
  {
    id: 5,
    brand: 'Lynk & Co Nha Trang',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/l_c_logo.jpg?raw=true',
    description:
    'Lynk & Co Nha Trang là trung tâm phân phối chính hãng thuộc thương hiệu ô tô toàn cầu Lynk & Co, cung cấp các dòng xe SUV hiện đại, giàu công nghệ.',
    role: 'Chạy quảng cáo, Content',
    platform: 'Meta Ads',
    industry: 'Automotive',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Lynk%20&%20Co.png?raw=true'],

    results: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/lc.png?raw=true']

  },
  {
    id: 6,
    brand: 'Nhựa Style Barber Shop',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/nhua_style_logo.jpg?raw=true',
    description:
    'Nhựa Style Barber Shop là chuỗi cửa hàng tóc nam chuyên nghiệp mang phong cách đường phố (Street Style) đặc trưng của Việt Nam. Hệ thống mở rộng hơn 11 chi nhánh tại Đà Nẵng và Hội An.',
    role: 'Chạy quảng cáo',
    platform: 'Google Ads',
    industry: 'Beauty & Grooming',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/NH%E1%BB%B0A%20Style%20barbershop.png?raw=true'],

    results: []
  },
  {
    id: 7,
    brand: 'Ryo Japanese Fusion',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/ryo_logo.jpg?raw=true',
    description:
    'Ryo Japanese Fusion là nhà hàng tiên phong trong phong cách ẩm thực kết hợp (Fusion) giữa truyền thống Nhật Bản và sự sáng tạo hiện đại của Việt Nam.',
    role: 'Chạy quảng cáo',
    platform: 'Meta Ads',
    industry: 'F&B - Japanese Fusion',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Ryo%20Japanese%20Fusion%20%C4%90%C3%A0%20N%E1%BA%B5ng.png?raw=true'],

    results: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/ryo_fb.png?raw=true',
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/ryo_ig.png?raw=true']

  },
  {
    id: 8,
    brand: 'S43 Tattoo Studio',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/s43_logo.jpg?raw=true',
    description:
    'S43 (S43 Tattoo Studio) là đơn vị uy tín trong lĩnh vực xăm hình nghệ thuật và xỏ khuyên, chuyên cung cấp các dịch vụ đa dạng bao gồm thiết kế hình xăm theo yêu cầu.',
    role: 'Chạy quảng cáo',
    platform: 'Meta Ads',
    industry: 'Art & Tattoo',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/S43.Tattoo-X%C4%83m%20H%C3%ACnh%20Ngh%E1%BB%87%20Thu%E1%BA%ADt%20%C4%90%C3%A0%20N%E1%BA%B5ng.png?raw=true'],

    results: []
  },
  {
    id: 9,
    brand: 'Visa Ventures',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/visa_logo.jpg?raw=true',
    description:
    'Visa Ventures là nhánh đầu tư chiến lược toàn cầu của tập đoàn thanh toán đa quốc gia Visa, hoạt động trong lĩnh vực đầu tư mạo hiểm và công nghệ tài chính (Fintech).',
    role: 'Chạy quảng cáo',
    platform: 'Google Ads',
    industry: 'Fintech',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Visa%20Ventures.png?raw=true'],

    results: []
  },
  {
    id: 10,
    brand: 'Anh Đức Print',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Anh%20%C4%90%E1%BB%A9c%20Print_logo.jpg?raw=true',
    description:
    'Anh Đức Print là thương hiệu uy tín lâu đời trong lĩnh vực nhiếp ảnh và in ấn kỹ thuật số, chuyên cung cấp các dịch vụ chuyên nghiệp như in ảnh kỷ niệm, sản xuất album cưới.',
    role: 'Content SEO, Code Website',
    platform: 'WordPress',
    industry: 'Photography & Printing',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/web_adp.png?raw=true',
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/web2_adp.png?raw=true'],

    results: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/seo2_adp.png?raw=true',
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/seo_adp.png?raw=true']

  },
  {
    id: 11,
    brand: 'Nour Homee',
    logo: 'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Nour%20Homee_logo.jpg?raw=true',
    description:
    'Nour Homee là thương hiệu lưu trú chuyên biệt dành cho các cặp đôi đang tìm kiếm một không gian hẹn hò tinh tế và riêng tư ngay lòng Thủ đô. Hệ thống 4 cơ sở tại Hà Nội.',
    role: 'Chạy quảng cáo',
    platform: 'Meta Ads',
    industry: 'Hospitality - Boutique Homestay',
    campaigns: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/camp_Nour%20Homee.png?raw=true'],

    results: [
    'https://github.com/nguyenluat19/img_portfolio/blob/main/profolio/Nour%20Homee.png?raw=true']

  }];

  // =========== EFFECTS ===========
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        threshold: 0.3
      }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  // =========== HELPER FUNCTIONS ===========
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };
  const copyEmail = () => {
    navigator.clipboard.writeText(heroData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxImage(images[index]);
  };
  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxImages([]);
  };
  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % lightboxImages.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(lightboxImages[newIndex]);
  };
  const prevImage = () => {
    const newIndex =
    (currentImageIndex - 1 + lightboxImages.length) % lightboxImages.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(lightboxImages[newIndex]);
  };
  // =========== RENDER ===========
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans">
      {/* =========== NAVIGATION BAR =========== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="animated-border rounded-lg px-4 py-2">
            <span className="font-heading font-extrabold text-xl md:text-2xl text-gradient-gold">
              DIGITAL MARKETING
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
            {
              id: 'gioi-thieu',
              label: 'GIỚI THIỆU'
            },
            {
              id: 'ky-nang',
              label: 'KỸ NĂNG'
            },
            {
              id: 'kinh-nghiem',
              label: 'KINH NGHIỆM'
            }].
            map((item) =>
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id as SectionId)}
              className={`font-medium text-sm transition-all duration-300 relative ${activeSection === item.id ? 'text-[#C5A059]' : 'text-[#1A1A1A] hover:text-[#C5A059]'}`}>

                {item.label}
                <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#C5A059] transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0'}`} />

              </button>
            )}
            <button
              onClick={() => scrollToSection('lien-he')}
              className="animated-border rounded-full px-6 py-2 font-bold text-sm hover:shadow-[0_0_24px_rgba(197,160,89,0.4)] transition-all">

              LIÊN HỆ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>

            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
        <div className="md:hidden bg-white border-t border-gray-100 p-6">
            {[
          {
            id: 'gioi-thieu',
            label: 'GIỚI THIỆU'
          },
          {
            id: 'ky-nang',
            label: 'KỸ NĂNG'
          },
          {
            id: 'kinh-nghiem',
            label: 'KINH NGHIỆM'
          },
          {
            id: 'lien-he',
            label: 'LIÊN HỆ'
          }].
          map((item) =>
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id as SectionId)}
            className="block w-full text-left py-3 border-b border-gray-50">

                {item.label}
              </button>
          )}
          </div>
        }
      </nav>

      {/* =========== HERO SECTION =========== */}
      <section
        id="gioi-thieu"
        ref={(el) => sectionRefs.current['gioi-thieu'] = el}
        className="min-h-screen flex items-center pt-24 pb-20 bg-gradient-to-br from-white via-[#FFF9E6] to-white">

        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Avatar Column */}
          <div className="lg:col-span-2 flex flex-col items-center animate-fadeInUp">
            <div className="animated-border rounded-2xl p-1 shadow-[0_8px_32px_rgba(197,160,89,0.3)]">
              <img
                src={heroData.avatar}
                alt={heroData.name}
                className="w-full max-w-sm aspect-[9/16] object-cover rounded-xl" />

            </div>
            <p className="mt-4 text-sm text-[#4A4A4A] text-center">
              {heroData.avatarCaption}
            </p>
          </div>

          {/* Info Column */}
          <div
            className="lg:col-span-3 animate-fadeInUp"
            style={{
              animationDelay: '0.2s'
            }}>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-gradient-gold">
              {heroData.name}
            </h1>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#C5A059]" />
                <span className="font-medium">{heroData.birthDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059]" />
                <span className="font-medium">{heroData.phone}</span>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer group"
                onClick={copyEmail}>

                <Mail className="w-5 h-5 text-[#C5A059]" />
                <span className="font-medium group-hover:text-[#C5A059] transition-colors">
                  {heroData.email}
                </span>
                {emailCopied &&
                <span className="text-xs text-green-600">✓ Đã sao chép</span>
                }
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
                <span className="font-medium">{heroData.location}</span>
              </div>
            </div>

            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
              {heroData.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========== SKILLS SECTION =========== */}
      <section
        id="ky-nang"
        ref={(el) => sectionRefs.current['ky-nang'] = el}
        className="py-24 bg-[#E2F1E7]">

        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 inline-block relative">
              KỸ NĂNG CHUYÊN MÔN
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) =>
            <div
              key={skill.id}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[rgba(197,160,89,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`
              }}>

                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{skill.icon}</div>
                  <span className="font-medium text-2xl text-[#C5A059]">
                    {skill.level}%
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-[#757575] mb-4">
                  {skill.description}
                </p>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#A7D397] rounded-full transition-all duration-1500 ease-out"
                  style={{
                    width: `${skill.level}%`
                  }} />

                </div>
              </div>
            )}
          </div>

          {/* Brand Logos Carousel */}
          <div className="mt-20">
            <div className="text-center mb-8">
              <h3 className="font-heading font-semibold text-2xl text-[#4A4A4A]">
                Đối tác & Khách hàng đã hợp tác
              </h3>
            </div>
            <div className="relative overflow-hidden py-8">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#E2F1E7] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#E2F1E7] to-transparent z-10" />

              {/* Scrolling container */}
              <div className="logo-carousel-track">
                {/* First set of logos */}
                {projects.map((project) =>
                <div
                  key={`logo-1-${project.id}`}
                  className="logo-carousel-item">

                    <div className="w-28 h-28 rounded-2xl bg-white shadow-lg p-3 hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100">
                      <img
                      src={project.logo}
                      alt={project.brand}
                      className="w-full h-full object-cover rounded-xl" />

                    </div>
                  </div>
                )}
                {/* Duplicate set for seamless loop */}
                {projects.map((project) =>
                <div
                  key={`logo-2-${project.id}`}
                  className="logo-carousel-item">

                    <div className="w-28 h-28 rounded-2xl bg-white shadow-lg p-3 hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-100">
                      <img
                      src={project.logo}
                      alt={project.brand}
                      className="w-full h-full object-cover rounded-xl" />

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== WORK EXPERIENCE SECTION =========== */}
      <section
        id="kinh-nghiem"
        ref={(el) => sectionRefs.current['kinh-nghiem'] = el}
        className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* Timeline */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                KINH NGHIỆM LÀM VIỆC
              </h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C5A059] to-[#A7D397]" />

              <div className="space-y-12">
                {workExperience.map((exp, index) =>
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:justify-between group`}>

                    <div
                    className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-150"
                    style={{
                      backgroundColor: exp.color
                    }} />


                    <div
                    className={`w-full md:w-[45%] ml-8 md:ml-0 bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-2 cursor-pointer hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300`}
                    style={{
                      borderColor: exp.color
                    }}
                    onClick={() =>
                    setExpandedExp(expandedExp === exp.id ? null : exp.id)
                    }>

                      <div className="flex items-center justify-between mb-2">
                        <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${exp.color}20`,
                          color: exp.color
                        }}>

                          {exp.period}
                        </span>
                        {expandedExp === exp.id ?
                      <ChevronUp className="w-5 h-5" /> :

                      <ChevronDown className="w-5 h-5 animate-pulse-icon" />
                      }
                      </div>

                      <h3 className="font-heading font-bold text-2xl mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-[#4A4A4A] mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {exp.company}
                      </h4>
                      <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: '#E2F1E7',
                        color: '#5A8D6A'
                      }}>

                        💰 {exp.budget}
                      </div>

                      {expandedExp === exp.id &&
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                          {exp.achievements.map((achievement, i) =>
                      <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#A7D397] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#4A4A4A]">
                                {achievement}
                              </span>
                            </div>
                      )}
                        </div>
                    }
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                DỰ ÁN NỔI BẬT
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const allImages = [...project.campaigns, ...project.results];
                const hasMultipleImages = allImages.length > 1;
                const previewImage = allImages[0];
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.16)] hover:-translate-y-2 transition-all duration-300 flex flex-col">

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={project.logo}
                          alt={project.brand}
                          className="w-16 h-16 rounded-lg object-cover" />

                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-2xl mb-1">
                            {project.brand}
                          </h3>
                          <span className="inline-block px-2 py-1 bg-[#E2F1E7] text-[#5A8D6A] text-xs rounded-md">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Briefcase className="w-4 h-4 text-[#C5A059]" />
                          <span className="font-medium">{project.role}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-[#C5A059]" />
                          <span className="font-medium">
                            {project.platform}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Single centered image */}
                      {previewImage &&
                      <div className="mb-4">
                          <img
                          src={previewImage}
                          alt={`${project.brand} preview`}
                          className="w-full aspect-video object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openLightbox(allImages, 0)} />

                        </div>
                      }

                      {/* View all images button */}
                      {hasMultipleImages &&
                      <button
                        className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A059] transition-all duration-300 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                        onClick={() => openLightbox(allImages, 0)}>

                          <Images className="w-4 h-4" />
                          Xem tất cả ({allImages.length} hình ảnh)
                        </button>
                      }
                    </div>
                  </div>);

              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========== CONTACT SECTION =========== */}
      <section
        id="lien-he"
        ref={(el) => sectionRefs.current['lien-he'] = el}
        className="py-24 bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            SẴN SÀNG HỢP TÁC CÙNG BẠN
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Hãy để tôi giúp bạn scale doanh nghiệp với chiến lược Digital
            Marketing hiệu quả
          </p>

          <a
            href={`https://zalo.me/${heroData.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-white rounded-full px-12 py-5 font-heading font-semibold text-xl hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] hover:scale-105 transition-all duration-300">

            <MessageCircle className="w-6 h-6 animate-pulse-icon" />
            LIÊN HỆ NGAY QUA ZALO
          </a>

          <div className="mt-12 flex justify-center gap-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/nguyenhuuluat2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-[#1877F2] hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(24,119,242,0.4)] transition-all"
              title="Facebook">

              <Facebook className="w-8 h-8" />
            </a>
            {/* Zalo */}
            <a
              href={`https://zalo.me/${heroData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-[#0068FF] hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,104,255,0.4)] transition-all"
              title="Zalo">

              <MessageCircle className="w-8 h-8" />
            </a>
            {/* Email */}
            <a
              href={`mailto:${heroData.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-[#EA4335] hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(234,67,53,0.4)] transition-all"
              title="Email">

              <Mail className="w-8 h-8" />
            </a>
          </div>

          <footer className="mt-16 text-sm text-gray-500">
            © 2026 Digital Marketing Portfolio. All rights reserved.
          </footer>
        </div>
      </section>

      {/* =========== LIGHTBOX MODAL =========== */}
      {lightboxImage &&
      <div
        className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
        onClick={closeLightbox}>

          <button
          className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          onClick={closeLightbox}>

            <X className="w-6 h-6 text-white" />
          </button>

          {lightboxImages.length > 1 &&
        <>
              <button
            className="absolute left-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}>

                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
            className="absolute right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}>

                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
        }

          <img
          src={lightboxImage}
          alt="Lightbox"
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()} />

        </div>
      }
    </div>);

}