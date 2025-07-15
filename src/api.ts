export const fetchProjects = async () => {
  const res = await fetch('http://localhost:5000/projects');
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
};
