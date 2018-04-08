/**
 *
 * @param {string} appName
 * @returns {string}
 */
export const IndexHtml = (appName: string) => {

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ngGame</title>
  <link rel="shortcut icon" href="assets/images/favicon.ico">
</head>
<body ng-app="${appName}">

<ui-view name="mainView"></ui-view>

</body>
</html>`;

};

