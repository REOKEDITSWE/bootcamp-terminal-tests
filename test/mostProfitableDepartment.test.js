import assert from "assert";
import { mostProfitableDepartment } from "../mostProfitableDepartment.js";

// Mock data for testing
const salesData = [
    { department: "hardware", sales: 4500, day: "Monday" },
    { department: "outdoor", sales: 1500, day: "Monday" },
    { department: "carpentry", sales: 5500, day: "Monday" },
    { department: "hardware", sales: 7500, day: "Tuesday" },
    { department: "outdoor", sales: 2505, day: "Tuesday" },
    { department: "carpentry", sales: 1540, day: "Tuesday" },
    { department: "hardware", sales: 1500, day: "Wednesday" },
    { department: "outdoor", sales: 8507, day: "Wednesday" },
    { department: "carpentry", sales: 8009, day: "Wednesday" },
    { department: "hardware", sales: 12000, day: "Thursday" }
]