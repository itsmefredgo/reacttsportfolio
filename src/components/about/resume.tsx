// import { Document, Page } from 'react-pdf';

// function PortfolioPDF() {
//   const pdfUrl = 'https://example.com/path/to/your-portfolio.pdf';

//   return (
//     <div>
//       <Document file={pdfUrl}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }

import React from 'react';

function Resume() {
  const handleDownload = () => {
    window.open('/Resume_Frederick_Go.pdf', '_blank');
    // Or to download the file:
    // window.open('/resume.pdf', '_blank', 'download');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}

export default Resume;