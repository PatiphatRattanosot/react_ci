const Footer = () => {
    return (
        <footer className="w-full bg-gray-200 text-black text-center shadow-md p-6">
            <div className="container mx-auto flex flex-row items-center justify-between p-6 gap-8">

                <img src="https://firebasestorage.googleapis.com/v0/b/component-97b01.firebasestorage.app/o/Ooy%2Flogo.png?alt=media&token=26ff65aa-8383-41fc-8ccf-184567638ce3" alt="School Logo" className="w-24 h-24" />

                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold">โรงเรียนบางแพปฐมพิทยา</p>
                    <p className="text-sm">159 หมู่ที่ 3 ตำบลบางแพ อำเภอบางแพ</p>
                    <p className="text-sm">จังหวัดราชบุรี 70160</p>
                    <p className="text-sm">📞 โทรศัพท์ : 0-32381186</p>
                    <p className="text-sm">📠 โทรสาร : 032381023</p>
                </div>

                <div className="text-sm text-left">
                    <p className="font-semibold">📌 Facebook Page</p>
                    <p>Bangpoe_smile</p>
                    <p>ทะเบียนวัดผลโรงเรียนบางแพปฐมพิทยาคม</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
