interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} {name}</p>
    </footer>
  );
}
