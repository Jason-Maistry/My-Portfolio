const faqs = {
  categories: [
    "Aviation Risk Management Focus",
    "General Leadership & Strategy",
    "HOA General Management",
    "Sales, Commercial Strategy & Revenue Growth"
  ],
  faqs: [
    {
      id: 1,
      category: "Aviation Risk Management Focus",
      question: "How do you design and implement a Safety Management System (SMS) aligned with International Civil Aviation Organization standards?",
      answer: "I design and implement a Safety Management System by aligning it with International Civil Aviation Organization requirements, ensuring clear governance, risk identification, and reporting structures. I establish hazard reporting systems, risk assessment frameworks, and corrective action tracking. Training, audits, and continuous improvement cycles embed safety culture, ensuring proactive risk mitigation and full regulatory compliance across all operational areas."
    },
    {
      id: 2,
      category: "Aviation Risk Management Focus",
      question: "Describe your approach to identifying, assessing and mitigating operational risks in aviation.",
      answer: "My approach is systematic and proactive, grounded in structured Safety Management System principles aligned with International Civil Aviation Organization standards. I identify risks through audits, reporting systems, and operational data. Each risk is assessed by likelihood and impact, then prioritized. Mitigation includes procedural controls, training, monitoring, and continuous review to ensure risks are reduced to an acceptable and controlled level."
    },
    {
      id: 3, 
      category: "Aviation Risk Management Focus",
      question: "How do you ensure compliance with aviation regulations (e.g., International Civil Aviation Organization standards) while maintaining operational efficiency?",
      answer: "I ensure compliance with International Civil Aviation Organization standards by embedding regulatory requirements directly into operational procedures and SOPs. I streamline processes through risk-based decision-making, eliminating unnecessary complexity while maintaining strict audit readiness. Regular training, internal audits, and performance monitoring ensure compliance is sustained without compromising efficiency, productivity, or service delivery standards."
    },
    {
      id: 4,
      category: "Aviation Risk Management Focus",
      question: "Explain a time you handled a safety incident or crisis/audit finding. What was the outcome change?",
      answer: "During a critical audit finding involving procedural non-compliance, I immediately initiated containment actions, grounded affected processes, and conducted a root cause analysis. I restructured Standard Operating Procedures (SOPs), retrained staff, and introduced stricter oversight controls. Within weeks, compliance was fully restored, audit ratings improved significantly, and we achieved sustained operational discipline with no repeat findings thereafter."
    },
    {
      id: 5,
      category: "Aviation Risk Management Focus",
      question: "How do you build a strong safety culture across non-aviation teams (e.g., estate staff, contractors)?",
      answer: "I build a strong safety culture by simplifying aviation-grade principles from International Civil Aviation Organization into practical, role-specific behaviours for non-aviation teams. I focus on consistent training, visible leadership, and easy reporting systems. Contractors and staff are held to the same standards, reinforced through accountability, recognition, and continuous communication to embed ownership of safety at every level."
    },
    {
      id: 6,
      category: "General Leadership & Strategy",
      question: "How do you balance safety, profitability, and customer experience across different industries?",
      answer: "I treat safety as a non-negotiable baseline, guided by frameworks such as International Civil Aviation Organization standards. From there, I optimize processes to remove inefficiencies, protect margins, and elevate customer experience. Data-driven decisions and aligned KPIs ensure operational discipline, profitability, and consistently high service delivery across aviation, estate management, and sales environments."
    },
    {
      id: 7,
      category: "General Leadership & Strategy",
      question: "Describe your leadership style when managing diverse teams (operations, sales, ground staff, hospitality).",
      answer: "My leadership style is adaptive, structured, and performance-driven. I set clear expectations, align teams to shared KPIs, and empower department heads to execute. I combine operational discipline with coaching, ensuring safety, service excellence, and revenue focus. By fostering accountability and open communication, I unify diverse teams to deliver consistent, high-quality results."
    },
    {
      id: 8,
      category: "General Leadership & Strategy",
      question: "How do you prioritize competing operational and financial goals?",
      answer: "I prioritize competing operational and financial goals by anchoring decisions in risk, compliance, and strategic impact, guided by frameworks such as International Civil Aviation Organization standards. I segment priorities into non-negotiables (safety, compliance), value drivers (revenue, customer experience), and efficiencies. Using data and KPIs, I allocate resources to initiatives that optimize performance while protecting long-term sustainability and stakeholder value."
    },
    {
      id: 9,
      category: "General Leadership & Strategy",
      question: "Tell us about a time you turned around an underperforming operation.",
      answer: "I inherited an underperforming operation with declining revenue, low morale, and inconsistent service standards. I stabilized performance by addressing compliance gaps, resetting KPIs, and restructuring the team. By improving processes, strengthening accountability, and refocusing on customer experience and sales discipline, I delivered measurable revenue growth, improved operational efficiency, and restored stakeholder confidence within a defined turnaround period."
    },
    {
      id: 10,
      category: "General Leadership & Strategy",
      question: "How do you align team performance with organizational KPIs?",
      answer: "I align team performance with organizational KPIs by translating strategic objectives into clear, measurable departmental targets. Each team understands how their output impacts revenue, safety, and service outcomes. I implement regular performance reviews, dashboard reporting, and accountability structures. Continuous feedback and coaching ensure alignment, while data-driven tracking keeps teams focused on priorities and consistent execution."
    },
    {
      id: 11,
      category: "HOA General Management",
      question: "How do you manage daily operations of a full operation of a residential estate (security, facilities, landscaping, hospitality) while maximizing member satisfaction?",
      answer: "By setting clear daily routines, I coordinate security, facilities, landscaping, and hospitality through structured schedules and accountability. I use regular inspections, quick issue resolution, and strong vendor management. Constant communication with staff and residents helps me anticipate needs, improve service quality, and ensure a safe, well-maintained, and comfortable living environment."
    },
    {
      id: 12,
      category: "HOA General Management",
      question: "What strategies do you use to increase memberships, retain clients, enhance property value and resident satisfaction?",
      answer: "I focus on delivering consistent service quality, quick issue resolution, and a premium living experience. I use resident feedback to improve offerings and personalize engagement. Strong marketing, community events, and referral programmes help attract new members. For retention, I prioritize trust, safety, and value-added services, while proactive maintenance protects and enhances long-term property value."
    },
    {
      id: 13,
      category: "HOA General Management",
      question: "How do you manage homeowners' associations (HOA), governance, and stakeholder expectations with revenue generation?",
      answer: "I manage HOA governance by ensuring transparency, compliance with rules, and regular communication with trustees and residents. Clear budgeting and reporting build trust while aligning spending with priorities. I balance stakeholder expectations by linking decisions to long-term value and service quality. Revenue is grown through efficient cost control, fair levies, and value-added services."
    },
    {
      id: 14,
      category: "HOA General Management",
      question: "Describe your approach to budgeting, cost control, and long-term infrastructure planning using experience with events, tournaments, and hospitality services.",
      answer: "I build budgets based on historical data, event forecasts, and operational needs, ensuring every cost has clear justification. I control spending through supplier negotiation, strict approval processes, and regular variance tracking. Long-term planning focuses on asset lifecycle, preventive maintenance, and scalable infrastructure. My experience in events and hospitality helps me balance quality service with cost efficiency."
    },
    {
      id: 15,
      category: "HOA General Management",
      question: "How do you handle customer complaints, service recovery, disputes between residents, members, or stakeholders?",
      answer: "I handle complaints quickly and calmly by listening first and understanding the real issue. I acknowledge concerns, investigate fairly, and communicate clear timelines for resolution. For disputes, I stay neutral, focus on facts, and align outcomes with rules and fairness. I always follow up to ensure satisfaction and prevent repeat issues through system improvements."
    },
    {
      id: 16,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "What is your approach to driving sales across property, memberships, and lifestyle services across multiple business units?",
      answer: "I drive sales by aligning all business units under one clear value proposition focused on lifestyle and experience. I use targeted marketing, partnerships, and data insights to identify opportunities. Cross-selling between property, memberships, and services increases revenue per client. Strong relationship management, consistent service delivery, and brand positioning help convert leads and retain long-term customers."
    },
    {
      id: 17,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "How do you build and manage high-performing sales teams?",
      answer: "I build high-performing sales teams by hiring for attitude, discipline, and customer focus first. I set clear targets, provide structured training, and ensure constant coaching on real deals. Performance is tracked daily with accountability dashboards. I motivate teams through recognition, incentives, and clear growth paths, while removing barriers so they can focus on closing sales effectively."
    },
    {
      id: 18,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "Describe your approach to high-value property or lifestyle sales?",
      answer: "I approach high-value property and lifestyle sales by deeply understanding client needs, lifestyle goals, and investment expectations. I focus on relationship building, trust, and tailored presentations rather than hard selling. I highlight long-term value, exclusivity, and service quality. Consistent follow-ups, strong negotiation skills, and attention to detail help me close deals while protecting brand reputation."
    },
    {
      id: 19,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "How do you use data and KPIs to improve and lead a high-performing sales team and sales performance?",
      answer: "I use data and KPIs to track every stage of the sales funnel, from leads to conversions. Daily dashboards highlight performance gaps and opportunities. I monitor conversion rates, response times, and revenue per rep to guide coaching. This helps me make quick decisions, improve accountability, and continuously refine strategies to drive stronger, consistent sales results."
    },
    {
      id: 20,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "Tell us about your biggest sales achievement and how you accomplished it.",
      answer: "My biggest sales achievement was turning around an underperforming portfolio and exceeding targets by focusing on structured follow-ups, reactivating dormant leads, and strengthening client relationships. I improved team discipline, introduced clear KPIs, and refined the sales pitch around value and experience. Consistent execution and coaching helped rebuild momentum and deliver sustained revenue growth."
    },
    {
      id: 21,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "How has aviation risk management influenced your decision-making in hospitality or estate operations?",
      answer: "Aviation risk management has made my decision-making more structured, disciplined, and safety-focused in hospitality and estate operations. I assess risks proactively, rely on checklists, and ensure strict compliance with procedures. It also improved my incident reporting and prevention mindset, helping me reduce operational errors, improve guest safety, and maintain consistent service standards under pressure."
    },
    {
      id: 22,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "How do you transfer safety discipline into customer-facing environments?",
      answer: "I transfer safety discipline into customer-facing environments by making standards simple, visible, and part of daily routines. Staff are trained to follow clear procedures, spot risks early, and act immediately. I reinforce accountability through supervision and feedback. At the same time, I balance safety with service so customers feel secure without losing a welcoming experience."
    },
    {
      id: 23,
      category: "Sales, Commercial Strategy & Revenue Growth",
      question: "What synergies do you see between operational risk control and revenue growth?",
      answer: "Strong operational risk control directly supports revenue growth by improving consistency, trust, and service quality. When risks are managed well, downtime and incidents reduce, protecting reputation and customer confidence. This leads to higher retention, referrals, and premium pricing opportunities. Efficient systems also lower costs, freeing resources that can be reinvested into growth and customer experience."
    }
  ]
}

export default faqs;