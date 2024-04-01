import { Box, Typography } from "@mui/material";
import React from "react";
import Accord from "./Accord";

const AccordData = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: { lg: "7rem 0", xs: "3rem 0", sm: "4rem 0", md: "6rem 0" },
        fontFamily: "sans-serif",
      }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "700",
          fontSize: { xs: "30px", sm: "40px", lg: "50px" },
          background:
            "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(195,32,81,1) 65%, rgba(2,0,36,1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}>
        Your Queries Resolved <br />
        Dive into our Comprehensive FAQs
      </Typography>

      {/* FAQ Section */}

      <Accord
        Summary={"What is oneXerp?"}
        Details={
          "oneXerp is an AI-driven, comprehensive ERP system that streamlines company processes by driving real-time project P&L from existing financial, HR, and project management systems. It's designed to enhance operational efficiency and provide clear financial insights."
        }
      />
      <Accord
        Summary={"How does the Ordering & Logistics module work?"}
        Details={
          "This module provides a sophisticated, AI-powered and item master-less procurement process, allowing for both AI-generated and manual PO creation, payment scheduling, and management of transportation, receiving, and returns, ensuring a seamless logistical flow."
        }
      />
      <Accord
        Summary={"How does the Time Tracking & Attendance module work?"}
        Details={
          "Employees use a unique QR code to track their time, providing accurate labor distribution by job. This data integrates with HR systems for workforce management and payroll, enhancing overall operational efficiency."
        }
      />
      <Accord
        Summary={
          "How does the Job Costing & Estimation module aid in project management?"
        }
        Details={
          "It offers a robust toolset for defining project structures, allows client collaboration on proposals, and delivers structured data to project management systems, setting the groundwork for successful project execution."
        }
      />
      <Accord
        Summary={"How is AI infused into oneXerp?"}
        Details={
          "AI is integrated throughout oneXerp to automate and enhance functions such as OCR for invoice processing, analytics for real-time insights, and predictive modeling for job costing, ensuring accuracy and efficiency in every module."
        }
      />
      <Accord
        Summary={"Can oneXerp integrate with my existing financial system?"}
        Details={
          "Absolutely. oneXerp's extensible finance engine is designed for seamless integration, ensuring that your financial reporting is accurate and completely synchronized with your operational activities."
        }
      />
      <Accord
        Summary={"What makes oneXerp unique in managing project profitability?"}
        Details={
          "oneXerp's unique real-time P&L dashboard provides a detailed financial overview for each project, integrating seamlessly with other modules to offer actionable insights, which helps in making strategic decisions to improve project profitability."
        }
      />
      <Accord
        Summary={"Is oneXerp mobile-friendly?"}
        Details={
          "Yes, oneXerp is accessible and fully functional on all mobile devices, ensuring you can manage operations, view analytics, and make decisions from anywhere, at any time."
        }
      />
    </Box>
  );
};

export default AccordData;
