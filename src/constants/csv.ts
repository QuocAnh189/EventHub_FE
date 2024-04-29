const reasons = [
  `['Cơ hội tìm kiếm việc làm',
    'Học hỏi các nền văn hóa của các công ty trong và ngoài nước',
    'Nhận được những phần quà hấp dẫn có ưu đãi']`
]

const subImage = [
  `['https://tuyensinh.uit.edu.vn/sites/default/files/uploads/images/202312/tla00192.jpg',
  'https://tuyensinh.uit.edu.vn/sites/default/files/uploads/images/202312/tla00233.jpg',
  'https://tuyensinh.uit.edu.vn/sites/default/files/uploads/images/202312/tla00238.jpg',
  'https://tuyensinh.uit.edu.vn/sites/default/files/uploads/images/202312/tla00278.jpg']`
]

const tickets = `[{ name: 'medium', quantity: 100, price: 100 }]`

export const exampleEventCSV = [
  [
    'name',
    'category',
    'eventType',
    'startDate',
    'endDate',
    'startTime',
    'endTime',
    'location',
    'description',
    'reasons',
    'coverImage',
    'subImage',
    'eventTicket',
    'tickets'
  ],
  [
    'Ngày hội việc làm UIT',
    'b9c1b88c-94fe-4d1a-85c2-256986193374',
    'RECURRING',
    '=DATE(2024,9,18)',
    '=DATE(2024,9,19)',
    '5:00:00 PM',
    '10:00:00 PM',
    'University of Information Technology',
    'UIT CAREER DAY là hoạt động thường niên của Trường Đại học Công nghệ Thông tin, được tổ chức nhằm tạo điều kiện để sinh viên có điều kiện gặp gỡ, trao đổi, tìm kiếm cơ hội việc làm, thực tập từ các doanh nghiệp hoạt động trong lĩnh vực Công nghệ Thông tin và Truyền thông trong và ngoài nước. Tại đây, sinh viên có cái nhìn thực tế và tổng quát nhất về thị trường tuyển dụng nhân lực IT hiện nay.',
    reasons,
    'https://lh7-us.googleusercontent.com/W7iTopDMEPpjQsQ8wbl1gJLkgAidXb77uUFObNgs0prYYz71UQEd8YkFoYvIGlBWPmvQq7n-3lHthSDTMPv52qXFCT862OWsaNZDDDd4KQmKPXpjob_DDlm-SVzbY404MWlxUNJNQCHopsQSrDPBs2A',
    subImage,
    'FEE',
    tickets
  ]
]
