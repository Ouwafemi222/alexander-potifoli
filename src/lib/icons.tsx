import {
  BookOpen,
  CupSoda,
  FileSliders,
  Gem,
  LayoutTemplate,
  Megaphone,
  MonitorPlay,
  Newspaper,
  Paintbrush,
  Presentation,
  Share2,
  Sparkles,
  Tablet,
  Tag,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "layout-template": LayoutTemplate,
  presentation: Presentation,
  tag: Tag,
  "monitor-play": MonitorPlay,
  sparkles: Sparkles,
  "file-sliders": FileSliders,
  "cup-soda": CupSoda,
  paintbrush: Paintbrush,
  "book-open": BookOpen,
  tablet: Tablet,
  "share-2": Share2,
  gem: Gem,
  megaphone: Megaphone,
  newspaper: Newspaper,
};

export function getServiceIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? LayoutTemplate;
}
