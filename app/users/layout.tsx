export default function UserLayout({ 
    children, 
}: { 
    children: React.ReactNode 
}) {
  return <div>
    <h1 style={{ color: 'red' }}>Welcome</h1>{children}</div>
}