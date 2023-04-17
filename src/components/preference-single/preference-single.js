import React, { useEffect, useState } from "react";
import "./preference-single.css";
import Layout from "../../HOC/layout/layout";
import InterestSingle from "../interest-single/interestSingle";
import Marketing from "../../svgcomponents/marketing/marketing";
import DigitalMarket from "../../svgcomponents/digital-market/digitalMarket";
import Financial from "../../svgcomponents/financial/financial";
import Leadership from "../../svgcomponents/leadership/leadership";
import Operation from "../../svgcomponents/operation/operation";
import Growth from "../../svgcomponents/growth/growth";
import BusinessMana from "../../svgcomponents/business-mana/businessMana";
import CustomerSupport from "../../svgcomponents/customer-support/customerSupport";
import HR from "../../svgcomponents/hr/hr";
import BusinessComm from "../../svgcomponents/business-comm/businessComm";
import ProjectManage from "../../svgcomponents/project-manage/projectManage";
import Entrepreneur from "../../svgcomponents/entrepreneur/entrepreneur";
import InterBuss from "../../svgcomponents/inter-buss/interBuss";
import SupplyChain from "../../svgcomponents/supply-chain/supplyChain";
import Button from "../button/button";

const PreferenceSingle = () => {
  const [marketing, setMarketing] = useState(false);
  const [digitalMarketing, setDigitalMarketing] = useState(false);
  const [finance, setFinance] = useState(false);
  const [leadership, setLeadership] = useState(false);
  const [operations, setOperations] = useState(false);
  const [sales, setSales] = useState(false);
  const [businessManage, setBusinessManage] = useState(false);
  const [customerService, setCustomerService] = useState(false);
  const [hr, setHr] = useState(false);
  const [businessComm, setBusinessComm] = useState(false);
  const [project, setProject] = useState(false);
  const [entrepreneurship, setEntrepreneurship] = useState(false);
  const [international, setInternational] = useState(false);
  const [supply, setSupply] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {}, [categories]);

  return (
    <Layout>
      <div className="preference-container">
        <div className="preference-header">
          <h2>Tell Us Your Interest</h2>
          <p>Select the five categories that best represent your interest to personalize your experience.</p>
        </div>
        <div className="preference-body">
          <div className="preference-wrapper">
            <InterestSingle
              text="Marketing"
              icon={<Marketing color={marketing ? "#0663C7" : "#C4C4C4"} />}
              className={marketing ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (marketing) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Marketing";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Marketing"]);
                }

                setMarketing(!marketing);
              }}
            />
            <InterestSingle
              text="Digital Marketing"
              icon={<DigitalMarket color={digitalMarketing ? "#0663C7" : "#C4C4C4"} />}
              className={digitalMarketing ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (digitalMarketing) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Digital Marketing";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Digital Marketing"]);
                }
                setDigitalMarketing(!digitalMarketing);
              }}
            />
            <InterestSingle
              text="Finance & Accounting"
              icon={<Financial color={finance ? "#0663C7" : "#C4C4C4"} />}
              className={finance ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (finance) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Finance & Accounting";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Finance & Accounting"]);
                }
                setFinance(!finance);
              }}
            />
            <InterestSingle
              text="Leadership & Management"
              icon={<Leadership color={leadership ? "#0663C7" : "#C4C4C4"} />}
              className={leadership ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (leadership) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Leadership & Management";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Leadership & Management"]);
                }
                setLeadership(!leadership);
              }}
            />
          </div>
          <div className="preference-wrapper">
            <InterestSingle
              text="Operations Management"
              icon={<Operation color={operations ? "#0663C7" : "#C4C4C4"} />}
              className={operations ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (operations) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Operations Management";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Operations Management"]);
                }
                setOperations(!operations);
              }}
            />
            <InterestSingle
              text="Sales"
              icon={<Growth color={sales ? "#0663C7" : "#C4C4C4"} />}
              className={sales ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (sales) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Sales";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Sales"]);
                }
                setSales(!sales);
              }}
            />
            <InterestSingle
              text="Business Management"
              icon={<BusinessMana color={businessManage ? "#0663C7" : "#C4C4C4"} />}
              className={businessManage ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (businessManage) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Business Management";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Business Management"]);
                }
                setBusinessManage(!businessManage);
              }}
            />
            <InterestSingle
              text="Customer Service"
              icon={<CustomerSupport color={customerService ? "#0663C7" : "#C4C4C4"} />}
              className={customerService ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (customerService) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Customer Service";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Customer Service"]);
                }
                setCustomerService(!customerService);
              }}
            />
          </div>
          <div className="preference-wrapper">
            <InterestSingle
              text="Human Resource Management"
              icon={<HR color={hr ? "#0663C7" : "#C4C4C4"} />}
              className={hr ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (hr) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Human Resource Management";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Human Resource Management"]);
                }
                setHr(!hr);
              }}
            />
            <InterestSingle
              text="Business Communication"
              icon={<BusinessComm color={businessComm ? "#0663C7" : "#C4C4C4"} />}
              className={businessComm ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (businessComm) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Business Communication";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Business Communication"]);
                }
                setBusinessComm(!businessComm);
              }}
            />
            <InterestSingle
              text="Project Management"
              icon={<ProjectManage color={project ? "#0663C7" : "#C4C4C4"} />}
              className={project ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (project) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Project Management";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Project Management"]);
                }
                setProject(!project);
              }}
            />
            <InterestSingle
              text="Entrepreneurship"
              icon={<Entrepreneur color={entrepreneurship ? "#0663C7" : "#C4C4C4"} />}
              className={entrepreneurship ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (entrepreneurship) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Entrepreneurship";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Entrepreneurship"]);
                }
                setEntrepreneurship(!entrepreneurship);
              }}
            />
          </div>
          <div className="preference-cont">
            <InterestSingle
              text="International Business"
              no={true}
              icon={<InterBuss color={international ? "#0663C7" : "#C4C4C4"} />}
              className={international ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (international) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "International Business";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "International Business"]);
                }
                setInternational(!international);
              }}
            />
            <InterestSingle
              text="Supply Chain Management"
              no={true}
              icon={<SupplyChain color={supply ? "#0663C7" : "#C4C4C4"} />}
              className={supply ? "interest-text" : "interest-text-white"}
              action={(e) => {
                if (supply) {
                  setCategories(
                    categories.filter((item) => {
                      return item !== "Supply Chain Management";
                    })
                  );
                } else {
                  setCategories((arr) => [...arr, "Supply Chain Management"]);
                }
                setSupply(!supply);
              }}
            />
          </div>
          <div className="preference-button">
            {categories.length === 0 ? (
              <Button buttonText="Done" disabled={true} bgColor="#7A7A7A" color="white" />
            ) : (
              <Button
                buttonText="Done"
                action={() => {
                  alert("Hello");
                }}
                disabled={false}
                bgColor="#066FE0"
                color="white"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PreferenceSingle;
