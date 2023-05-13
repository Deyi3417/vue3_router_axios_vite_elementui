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
}
export const users: User[] = [
    {
        id: 1,
        username: '刘德意',
        gender: '男',
        phone: '18811553417',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        email: '18811553417@163.com',
        userStatus: "正常",
        profile: '来自湖南。',
        createTime: new Date('2023-05-13'),
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
    },
    {
        id: 3,
        username: '李四',
        gender: '女',
        phone: '13800000002',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
        email: 'lisi@example.com',
        userStatus: '禁用',
        profile: '我是李四，来自上海。',
        createTime: new Date('2022-02-01'),
    },
];

