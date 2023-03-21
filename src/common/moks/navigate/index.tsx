import {
  AutoGraphOutlined,
  HomeOutlined,
  MenuBookOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

export const navMenu = [
  { id: 0, title: "Главная", icon: <HomeOutlined />, path: "/" },
  {
    id: 1,
    title: "Избранное",
    icon: <AutoGraphOutlined />,
    path: "/watchlist",
  },
  { id: 2, title: "Новости", icon: <MenuBookOutlined />, path: "/news" },
  { id: 3, title: "Настройки", icon: <SettingsOutlined />, path: "/settings" },
];
