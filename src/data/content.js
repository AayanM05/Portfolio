export const profile = {
  name: "Aayan Mulla",
  shortName: "Aayan",
  role: "Full-Stack Developer",
  stackLine: "Java / Spring Boot · Python / Django",
  location: "Pune, Maharashtra, India",
  email: "aayanmulla7777@gmail.com",
  github: "github.com/AayanM05",
  githubUrl: "https://github.com/AayanM05",
  tagline:
    "Building complete software solutions bridging frontend interfaces, microservice backends, and trained machine learning pipelines.",
  heroConfidence: "0.97",
};

export const timelineItems = [
  {
    id: "be",
    category: "ACADEMICS",
    period: "2023 — 2026",
    title: "Bachelor of Engineering (BE), Computer Engineering",
    place: "Dr. D.Y. Patil College of Engineering and Innovation, Varale, Pune",
    detail: "Final CGPA 7.01 · Fourth-year SGPA 7.88 · Core focus in Full-Stack Engineering, Cloud Architecture, and Machine Learning.",
    marksheetUrl: "/marksheets/be-final.pdf",
    linkText: "View marksheet",
  },
  {
    id: "elite",
    category: "INTERNSHIP",
    period: "Dec 2024 — Feb 2025",
    title: "Python-Django Developer Intern",
    place: "Elite Softwares Pvt. Ltd., Wakad, Pune",
    detail: "Built SeizeDeals, a Django e-commerce platform, from schema design through deployment — product catalog, cart and checkout flow, and admin tooling.",
    marksheetUrl: "/certificates/elite-internship.pdf",
    linkText: "View internship certificate",
  },
  {
    id: "diploma",
    category: "DIPLOMA",
    period: "2020 — 2023",
    title: "Diploma, Computer Engineering",
    place: "Zeal Polytechnic, Narhe, Pune",
    detail: "83.89% aggregate · foundation in core computer engineering subjects before moving into a specialized BE program.",
    marksheetUrl: "/marksheets/diploma.pdf",
    linkText: "View marksheet",
  },
  {
    id: "ssc",
    category: "SSC",
    period: "March 2020",
    title: "Secondary School Certificate Board (SSC)",
    place: "Shri. Chakradhar Swami Secondary School, Dattanagar, Pune",
    detail: "86.20% aggregate · final school-leaving examination ahead of the diploma track.",
    marksheetUrl: "/marksheets/ssc.pdf",
    linkText: "View marksheet",
  },
];

export const education = timelineItems.filter((item) => item.id !== "elite");
export const experience = timelineItems.filter((item) => item.id === "elite");

export const certifications = [
  {
    id: "elite",
    title: "Python-Django Developer Intern",
    issuer: "Elite Softwares Pvt. Ltd.",
    date: "February 2025",
    url: "/certificates/elite-internship.pdf",
  },
  {
    id: "exl",
    title: "Java and SQL Development Program",
    issuer: "TNS India Foundation",
    date: "August 2025",
    url: "/certificates/exl-java-sql.pdf",
  },
];

export const researchPaper = {
  title:
    "AI-Powered E-Waste Recycling and Management Platform Using YOLOv8 and Location-Based Collector Assignment",
  venue: "NCIRPIS-2026",
  detail: "Vol. 3, Issue 1 · Paper ID SP-2026-015 · June 2026",
  url: "/papers/erecyclo-ncirpis-2026.pdf",
};

export const skills = [
  {
    category: "Languages & Frameworks",
    tag: "CORE",
    items: [
      { name: "Java", relatedProjectIds: ["elearny"] },
      { name: "Spring Boot", relatedProjectIds: ["elearny"] },
      { name: "Python", relatedProjectIds: ["erecyclo", "seizedeals"] },
      { name: "Django", relatedProjectIds: ["erecyclo", "seizedeals"] },
      { name: "JavaScript", relatedProjectIds: ["elearny", "seizedeals"] },
      { name: "HTML / CSS", relatedProjectIds: ["elearny", "seizedeals"] },
    ],
  },
  {
    category: "Data & Machine Learning",
    tag: "AI/ML",
    items: [
      { name: "YOLOv8 / Computer Vision", relatedProjectIds: ["erecyclo"] },
      { name: "Model training & evaluation", relatedProjectIds: ["erecyclo"] },
    ],
  },
  {
    category: "Databases",
    tag: "DATA",
    items: [
      { name: "PostgreSQL", relatedProjectIds: ["erecyclo"] },
      { name: "MySQL", relatedProjectIds: ["elearny", "seizedeals"] },
    ],
  },
  {
    category: "Infra & Tooling",
    tag: "OPS",
    items: [
      { name: "Celery / Redis", relatedProjectIds: ["erecyclo"] },
      { name: "Razorpay integration", relatedProjectIds: ["erecyclo"] },
      { name: "Firebase", relatedProjectIds: ["erecyclo"] },
      { name: "Railway deployment", relatedProjectIds: ["erecyclo"] },
      { name: "Git / GitHub", relatedNote: "Used across every project" },
      { name: "IntelliJ IDEA", relatedProjectIds: ["elearny", "seizedeals"] },
    ],
  },
  {
    category: "OS, Hardware & Support",
    tag: "SUPPORT",
    items: [
      { name: "Windows administration & troubleshooting", relatedNote: "Lab assistant / technician track" },
      { name: "Linux fundamentals", relatedNote: "Server & deployment environments" },
      { name: "Laptop & PC hardware repair", relatedNote: "Hands-on: display cable & battery diagnostics" },
      { name: "Networking fundamentals", relatedNote: "LAN/Wi-Fi setup & troubleshooting" },
      { name: "Lab equipment setup & maintenance", relatedNote: "Zeal Polytechnic & DYPCOEI lab work" },
    ],
  },
];

export const projects = [
  {
    id: "erecyclo",
    class: "AI / FULL-STACK",
    name: "eRecyclo",
    tagline: "AI-powered e-waste recycling & management platform",
    confidence: "0.94",
    metricBadge: "PAPER ID: SP-2026-015 · 19.6K DATASET",
    summary:
      "A platform that identifies e-waste from photos, routes it to the nearest verified collector, and tracks it through pickup, payout, and disposal — published as a research paper at NCIRPIS-2026.",
    problem:
      "E-waste collection in most cities is informal and untracked — no reliable way to classify what's being discarded, match it to the right collector, or verify it was actually picked up and paid for.",
    approach: [
      "Trained a YOLOv8 model on 19,613 images across 14 categories and 77 sub-types of e-waste for automatic classification from user-submitted photos.",
      "Built collector matching using Haversine-distance calculations to assign the nearest available, verified collector to each pickup request.",
      "Implemented an OTP-based chain-of-custody so each handoff — user to collector, collector to facility — is verified at the point of transfer.",
      "Added a Razorpay-backed wallet system for collector payouts, with GPS-based pickup routing via OSRM and Leaflet.js.",
      "Used Celery and Redis for background job processing (model inference, notifications) and Firebase for real-time updates.",
    ],
    stack: [
      "Django", "PostgreSQL", "YOLOv8", "Celery", "Redis", "Firebase", "Razorpay", "OSRM", "Leaflet.js", "Railway",
    ],
    outcome:
      "Deployed on Railway; resolved production issues around OpenCV/YOLO system dependencies for a stable cloud build. Findings published and presented at NCIRPIS-2026 (Paper ID SP-2026-015), including baseline comparisons and class-wise performance data added during peer review.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "collectors/services/assignment.py",
      code: `from math import radians, sin, cos, sqrt, atan2

def haversine_km(a, b):
    """Great-circle distance between two (lat, lng) points, in km."""
    lat1, lng1 = map(radians, a)
    lat2, lng2 = map(radians, b)
    dlat, dlng = lat2 - lat1, lng2 - lng1
    h = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlng / 2) ** 2
    return 2 * 6371 * atan2(sqrt(h), sqrt(1 - h))


def assign_nearest_collector(pickup_location, category):
    """Match a classified pickup to the nearest verified,
    currently-available collector for that e-waste category."""
    candidates = Collector.objects.filter(
        is_verified=True,
        is_available=True,
        categories__contains=[category],
    )
    return min(
        candidates,
        key=lambda c: haversine_km(pickup_location, c.last_known_location),
        default=None,
    )`,
    },
    metrics: [
      { value: "19,613", label: "Training images" },
      { value: "14 / 77", label: "Categories / sub-types" },
      { value: "1", label: "Published paper" },
      { value: "5", label: "Integrated services" },
    ],
    takeaway: "Detection was the easy part.",
  },
  {
    id: "elearny",
    class: "FULL-STACK / LMS",
    name: "eLearny",
    tagline: "Spring Boot learning management system",
    confidence: "0.88",
    metricBadge: "SPRING BOOT 3 · SRS ARCHITECTURE",
    summary:
      "A full learning-management system built as a deep dive into Spring Boot — from schema design and a documented SRS through a complete backend and working frontend.",
    problem:
      "Wanted a portfolio project that proved production-style Spring Boot ability, not just a tutorial clone — proper documentation, a real service-layer architecture, and a working end-to-end app.",
    approach: [
      "Wrote a complete SRS and system architecture documentation, with SVG diagrams, before writing any backend code.",
      "Built a Spring Boot backend of roughly 60 files, covering course management, enrollment, and role-based access across students and instructors.",
      "Paired it with a plain HTML/CSS/JS frontend to keep the interface framework-agnostic and focused on the backend design.",
      "Ran the stack locally with MySQL through IntelliJ IDEA for development and testing.",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "HTML/CSS/JS", "IntelliJ IDEA"],
    outcome:
      "A complete, documented LMS used as the primary Spring Boot showcase in interviews, demonstrating backend architecture, database design, and REST API structure.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "EnrollmentService.java",
      code: `@Service
public class EnrollmentService {

    private final EnrollmentRepository enrollmentRepo;
    private final CourseRepository courseRepo;

    public EnrollmentService(EnrollmentRepository enrollmentRepo,
                              CourseRepository courseRepo) {
        this.enrollmentRepo = enrollmentRepo;
        this.courseRepo = courseRepo;
    }

    @Transactional
    public Enrollment enrollStudent(Long studentId, Long courseId) {
        Course course = courseRepo.findById(courseId)
            .orElseThrow(() -> new CourseNotFoundException(courseId));

        if (enrollmentRepo.existsByStudentIdAndCourseId(studentId, courseId)) {
            throw new DuplicateEnrollmentException(studentId, courseId);
        }

        Enrollment enrollment = new Enrollment(studentId, course, EnrollmentStatus.ACTIVE);
        return enrollmentRepo.save(enrollment);
    }

    public List<Enrollment> getActiveEnrollments(Long studentId) {
        return enrollmentRepo.findByStudentIdAndStatus(studentId, EnrollmentStatus.ACTIVE);
    }
}

@RestController
@RequestMapping("/api/courses/{courseId}/enroll")
class EnrollmentController {

    private final EnrollmentService enrollmentService;

    EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @PostMapping
    ResponseEntity<Enrollment> enroll(@PathVariable Long courseId,
                                       @RequestParam Long studentId) {
        Enrollment enrollment = enrollmentService.enrollStudent(studentId, courseId);
        return ResponseEntity.status(HttpStatus.CREATED).body(enrollment);
    }
}`,
    },
    metrics: [
      { value: "60", label: "Backend files" },
      { value: "12", label: "Day build schedule" },
      { value: "2", label: "User roles" },
      { value: "1", label: "Full SRS doc" },
    ],
    takeaway: "Docs first. Code second.",
  },
  {
    id: "seizedeals",
    class: "E-COMMERCE / DJANGO",
    name: "SeizeDeals",
    tagline: "Django e-commerce platform",
    confidence: "0.81",
    metricBadge: "DJANGO E-COMMERCE · CART & PAYMENTS",
    summary:
      "An e-commerce platform built during a Django internship at Elite Softwares — product catalog, cart, checkout, and admin management.",
    problem:
      "The internship needed a working e-commerce reference implementation to demonstrate Django fundamentals in a real deployable product.",
    approach: [
      "Designed the product/catalog data model and built the cart and checkout flow end to end.",
      "Built admin-side tooling for managing inventory and orders.",
      "Debugged and hardened the app across local Windows development environments (virtualenv, MySQL).",
    ],
    stack: ["Django", "Python", "MySQL", "HTML/CSS/JS", "Razorpay"],
    outcome:
      "Delivered as the core internship project, and used later as a reference point when setting up other Django projects.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "cart/models.py + views.py",
      code: `class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def total_price(self):
        return sum(item.subtotal() for item in self.items.all())


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name="items", on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def subtotal(self):
        return self.product.price * self.quantity


def checkout_view(request):
    cart = get_object_or_404(Cart, user=request.user, is_active=True)
    if not cart.items.exists():
        messages.error(request, "Your cart is empty.")
        return redirect("cart:detail")

    with transaction.atomic():
        order = Order.objects.create(
            user=request.user,
            total=cart.total_price(),
            status=Order.Status.PENDING,
        )
        for item in cart.items.select_related("product"):
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                unit_price=item.product.price,
            )
        cart.items.all().delete()

    return redirect("orders:confirmation", order_id=order.id)`,
    },
    metrics: [
      { value: "1st", label: "Production Django app" },
      { value: "3", label: "Core flows shipped" },
      { value: "Internship", label: "Delivered during" },
    ],
    takeaway: "Tutorials end. Deadlines don't.",
  },
];

export const quotes = {
  home: { line: "Build with clarity. Ship with confidence." },
  about: { line: "First make it work. Then make it right." },
  projects: { line: "One system, not three features." },
  achievements: { line: "Depth beats breadth." },
};

export const process = [
  {
    title: "Understand the real problem",
    detail:
      "Every project starts with a clear problem statement — who it's for, what it solves, and why the current approach falls short.",
  },
  {
    title: "Design before you build",
    detail:
      "Architecture, schema, and data flow are defined before writing the first line of code. Decisions made here are the hardest to undo.",
  },
  {
    title: "Build what matters most",
    detail:
      "Core functionality first — auth, data integrity, background jobs, error handling. The parts that keep a system reliable, not just impressive in a demo.",
  },
  {
    title: "Ship early, improve continuously",
    detail:
      "Deploy to a real environment as soon as possible. Real conditions surface issues no local setup ever will.",
  },
];

export const values = [
  {
    title: "Production-ready architecture",
    detail: "Designing clean APIs, robust database schemas, and structured error handling so applications run reliably in real deployment, not just on localhost.",
  },
  {
    title: "End-to-end execution",
    detail: "Taking software from architecture diagrams and SRS documentation through to deployed applications and published research papers.",
  },
  {
    title: "System integrity & maintainability",
    detail: "Ensuring backend services, frontend UIs, and machine learning pipelines integrate seamlessly with clean, maintainable code.",
  },
];

export const learningApproach = {
  eyebrow: "How I pick up new stacks",
  title: "Unfamiliar stack? Document first, code second.",
  body:
    "Django was the stack I learned first, during my internship. Spring Boot was the one I taught myself afterward, on purpose, because I wanted evidence I could get productive in an unfamiliar framework without a class schedule forcing it. eLearny was that proof: documentation, architecture, then code, in that order.",
};

export const dailyTools = [
  "IntelliJ IDEA", "VS Code", "Postman", "Git", "MySQL Workbench", "Railway",
  "Firebase Console", "Figma", "pgAdmin", "Docker Desktop", "GitHub Desktop", "Notion",
];

export const quickFacts = [
  { label: "Based in", value: profile.location },
  { label: "Looking for", value: "Fresher developer roles" },
  { label: "Open to", value: "Pune & Mumbai" },
  { label: "Reply time", value: "Within a day" },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
];
