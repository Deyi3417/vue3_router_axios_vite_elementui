export interface User {
    id: number;
    username: string;
    gender: string;
    phone: string;
    avatarUrl: string;
    email: string;
    userStatus: string;
    profile: string;
    createTime: Date;
    createTimeStr: string
}
export const users: User[] = [
    {
        id: 1,
        username: '刘德意',
        gender: '男',
        phone: '18811553417',
        avatarUrl: 'https://api2.mubu.com/v3/document_image/d7794d36-4baf-45e3-a808-be61a2eb09f0-13224389.jpg',
        email: '18811553417@163.com',
        userStatus: "正常",
        profile: '来自湖南。',
        createTime: new Date('2023-05-13'),
        createTimeStr: '2022-02-22'
    },
    {
        id: 2,
        username: '张三',
        gender: '男',
        phone: '13800000001',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        email: 'zhangsan@example.com',
        userStatus: '正常',
        profile: '我是张三，来自北京。',
        createTime: new Date('2022-01-01'),
        createTimeStr: '2023-05-14'
    },
    {
        id: 3,
        username: '李四',
        gender: '女',
        phone: '13800000002',
        avatarUrl: 'https://api2.mubu.com/v3/document_image/b8cdc710-c8de-4eaa-8ac3-0cceae209024-13224389.jpg',
        email: 'lisi@example.com',
        userStatus: '禁用',
        profile: '我是李四，来自上海。',
        createTime: new Date('2022-02-01'),
        createTimeStr: '2023-05-14 12:00:00'
    },
];

