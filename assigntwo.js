//Write a program which will take OS name and version from the user separated by a space. Then log the OS name and version on the console.

let os = {
 name: 'Microsoft Windows',
 version: 'Windows10',

 displayInfo: function () {
  console.log(`${os.name} has the version ${os.version} `);
 }
}
os.displayInfo();