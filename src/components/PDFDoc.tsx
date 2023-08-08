import React from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

interface PDFDocumentProps {
    content: string;
}

export const PDFDocument: React.FC<PDFDocumentProps> = ({ content }) => (
    <Document>
        <Page>
            <Text>{content}</Text>
        </Page>
    </Document>
);
