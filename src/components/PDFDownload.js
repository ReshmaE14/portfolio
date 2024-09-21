
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFDownload = ({ targetRef }) => {
  const generatePDF = () => {
    const input = targetRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('portfolio.pdf');
    });
  };

  return (
    <div className="form-section">
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PDFDownload;
