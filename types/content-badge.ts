export type ContentBadgeProps = {
  label: string;
  color: string;
  logo?: string;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  href?: string;
  tag?: boolean;
  download?: {
    href: string;
    filename?: string;
  };
  className?: string;
};
