const courses = [
  {
    title: 'Elements of Electrical Engineering',
    number: 'CS 2110005',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2110005.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Python Programming',
    number: 'CS 2180711',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2180711.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Artificial Intelligence',
    number: 'CS 2180703',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2180703.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Distributed DBMS',
    number: 'CS 2170714',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2170714.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Mobile Computing and Wireless Communication',
    number: 'CS 2170710',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2170710.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Information and Network Security',
    number: 'CS 2170709',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2170709.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: ' Complier Design',
    number: 'CS 2170701',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2170701.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Dot Net Technology',
    number: 'CS 2160711',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2160711.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: ' Web Technology',
    number: 'CS 2160708',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2160708.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Advanced Java',
    number: 'CS 2160707',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2160707.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Theory of Computation',
    number: 'CS 2160704',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2160704.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Software Engineering',
    number: 'CS 2160701',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2160701.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: ' Microprocessor and Interfacing',
    number: 'CS 2150707',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2150707.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: ' Analysis and Design of Algorithms',
    number: 'CS 2150703',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2150703.pdf',
    university: 'Gujarat Technologial University',
  },
  {
    title: 'Cyber Security',
    number: 'CS 2150002',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2150002.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Computer Networks',
    number: 'CS 2140709',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2140709.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Computer Organization',
    number: 'CS 2140707',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2140707.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Operating System',
    number: 'CS 2140702',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2140702.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Engineering Graphics',
    number: 'CS 2110013',
    link: 'http://www.cse.Gujarat Technological University.edu/~stevko/courses/cse490/spring11/',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Data Structure',
    number: 'CS 2130702',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2110013.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Digital Electronics',
    number: 'CS 2131004',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2131004.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Advanced Engineering Mathematics',
    number: 'CS 2130002',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2130002.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Vector Calculus & Linear Algebra',
    number: 'CS 2110015',
    link: 'https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/2110015.pdf',
    university: 'Gujarat Technological University',
  },
  {
    title: 'Communicating Computer Science Ideas',
    number: 'CSCI 5100',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=30907&entitytype=CID&entitycode=CSCI+5100',
    university: 'Dalhousie University',
  },
  {
    title: 'Software Development Concepts',
    number: 'CSCI 3901',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28582&entitytype=CID&entitycode=CSCI+3901',
    university: 'Dalhousie University',
  },
  {
    title: 'Advanced Topics in Software Development',
    number: 'CSCI 5308',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28584&entitytype=CID&entitycode=CSCI+5308',
    university: 'Dalhousie University',
  },
  {
    title: 'Data Management, Warehousing and Analytics',
    number: 'CSCI 5408  ',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=28584&entitytype=CID&entitycode=CSCI+5408',
    university: 'Dalhousie University',
  },
  {
    title: 'Serverless Data Processing',
    number: 'CSCI 5410',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=30907&entitytype=CID&entitycode=CSCI+5410',
    university: 'Dalhousie University',
  },
  {
    title: 'Privacy & IT',
    number: 'CSCI 5001',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=30907&entitytype=CID&entitycode=CSCI+5001',
    university: 'Dalhousie University',
  },
  {
    title: 'Advance Topics in Cloud Computing',
    number: 'CSCI 5409',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=30907&entitytype=CID&entitycode=CSCI+5409',
    university: 'Dalhousie University',
  },
  {
    title: 'Machine Learning',
    number: 'CSCI 6505',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=31777&entitytype=CID&entitycode=CSCI+6505',
    university: 'Dalhousie University',
  },
  {
    title: 'Advance Programming Comprehension',
    number: 'CSCI 5306',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=30907&entitytype=CID&entitycode=CSCI+5306',
    university: 'Dalhousie University',
  },
  {
    title: 'Advance Web Services ',
    number: 'CSCI 5709',
    link: 'https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&topicgroupid=29468&entitytype=CID&entitycode=CSCI+5709',
    university: 'Dalhousie University',
  },
];

export default courses;
