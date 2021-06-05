const readFile = require('fs/promises').readFile;
const writeFile = require('fs/promises').writeFile;
const gitHEADpath = '.git/HEAD';
const versionPath = 'version.txt';
const saveVersionInfoPath = 'src/assets/versionInfo.json';

async function getVersionInfo() {
  const now = new Date();

  const dateLocale = now.toLocaleString();
  const dateUTC = now.toISOString();
  const dateTimestamp = now.valueOf();

  const gitCurrentBranchInfo = await readFile(gitHEADpath, { encoding: 'utf8'} ).then(s => s.trim());
  const currentBranch = gitCurrentBranchInfo.split(' ')[1];
  const currentBranchPath = `.git/${currentBranch}`
  const commitId = await readFile(currentBranchPath, { encoding: 'utf8'} ).then(s => s.trim());
  const humanVersion = await readFile(versionPath, { encoding: 'utf8'} ).then(s => s.trim());

  const versionInfo = {
    'dateTimestamp': dateTimestamp,
    'dateUTC': dateUTC,
    'dateLocale': dateLocale,
    'gitBranchInfo': gitCurrentBranchInfo,
    'gitCommitId': commitId,
    'humanVersion': humanVersion,
  };

  return versionInfo;
}

async function main() {

  const versionInfo = await getVersionInfo();
  const stringifiedVersionInfo = JSON.stringify(versionInfo);
  await writeFile(saveVersionInfoPath, stringifiedVersionInfo, { encoding: 'utf8', flag: 'w' } );
}

main();
