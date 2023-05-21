import Link from 'next/link';

async function fetchRepoDirs(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/amexabee/${name}/contents`
  );

  const contents = response.json();
  return contents;
}

const RipoDirs = async ({ name }) => {
  const contents = await fetchRepoDirs(name);
  const dirs = contents.filter((content) => content.type === 'dir');
  console.log(dirs);

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RipoDirs;
