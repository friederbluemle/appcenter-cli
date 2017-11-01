
import * as pfs from "../../../util/misc/promisfied-fs";
import * as path from "path";

export function isBinaryOrZip(path: string): boolean {
  return path.search(/\.zip$/i) !== -1
      || path.search(/\.apk$/i) !== -1
      || path.search(/\.ipa$/i) !== -1;
}

export async function copyFileToTmpDir(filePath: string): Promise<string> {
  if (!(await pfs.stat(filePath)).isDirectory()) {
    // If releasing a single file, copy the file to a temporary 'CodePush' directory in which to publish the release
    var outputFolderPath: string = await pfs.mkTempDir("code-push");
    await pfs.rmDir(outputFilePath)
    await pfs.mkdir(outputFolderPath);

    var outputFilePath: string = path.join(outputFolderPath, path.basename(filePath));
    await pfs.writeFile(outputFilePath, await pfs.readFile(filePath));

    return outputFolderPath;
  }
}

export function generateRandomFilename(length: number): string {
  let filename: string = "";
  const validChar: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    filename += validChar.charAt(Math.floor(Math.random() * validChar.length));
  }

  return filename;
}