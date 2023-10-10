export const BaseKey = {
  id: "_id",
  active: "active",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

export const SeqKey = {
  ...BaseKey,
  name: "name",
  seq: "seq",
};

export const EmployeeKey = {
  ...BaseKey,
  employeeCode: "eCode",
  name: "name",
  image: "image",
  phone: "phone",
  dob: "dob",
  currentAddress: "currentAddress",
  nativeAddress: "nativeAddress",
  gmail: "gmail",
  citizenId: "citizenId",
  dow: "dow", //date of work
  doo: "doo", // date of out
  education: "education",
  gender: "gender",
  contract: "contract",
  level: "level",
  payLevel: "payLevel",
  department: "department",
  position: "position",
};

export const UserKey = {
  ...BaseKey,
  eployeeCode: "eCode",
  password: "password",
  role: "role",
  projects: "projects",
};

export const ProjectKey = {
  ...BaseKey,
  name: "name",
  description: "description",
  manager: "manager",
  startDate: "startDate",
  endDate: "endDate",
  image: "image",
  attachment: "attachment",
  status: "status",
  departments: "departments",
  members: "members",
  tasks: "tasks",
};

export const JobKey = {
  ...BaseKey,
  title: "title",
  salary: "salary",
  address: "address",
  level: "level",
  department: "department",
  description: "description",
  requirement: "requirement",
  compensation: "compensation",
  type: "type",
  quantity: "quantity",
  fields: "fields",
  skills: "skills",
  deadline: "deadline",
  source: "source",
  applicants: "applicants",
};

export const ApplicantKey = {
  ...BaseKey,
  jobId: "jobId",
  name: "name",
  gmail: "gmail",
  cv: "cv",
  description: "description",
  status: "status",
};

export const NewsKey = {
  ...BaseKey,
  title: "title",
  content: "content",
  image: "image",
  department: "department",
  like: "like",
  comments: "comments",
};

export const CommentKey = {
  ...BaseKey,
  newsId: "newsId",
  commentId: "commentId",
  userId: "userId",
  content: "content",
  like: "like",
  childComments: "childComments",
};

export const ChildCommentKey = {
  ...BaseKey,
  childCommentId: "childCommentId",
  userId: "userId",
  content: "content",
  like: "like",
  comment: "comment",
};

export const CourseKey = {
  ...BaseKey,
  name: "name",
  members: "members",
  description: "description",
  document: "document",
  project: "project",
};

export const CourseAppraisalKey = {
  ...BaseKey,
  courseId: "courseId",
  engage: "engage",
  evaluate: "evaluate",
  file: "file",
};

export const CheckinKey = {
  ...BaseKey,
  eCode: "eCode",
  checkin: "checkin",
  paidDayoff: "paidDayoff",
  notPaidDayoff: "notPaidDayoff",
  bonus: "bonus",
  info: "info",
};

export const SalaryKey = {
  ...BaseKey,
  author: "author",
  infos: "infos",
  totalPay: "totalPay",
  forGov: "forGov",
  forEmployee: "forEmployee",
};
