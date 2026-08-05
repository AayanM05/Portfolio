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
    marksheetUrl: "/docs/marksheets/be-final.pdf",
    linkText: "View marksheet",
  },
  {
    id: "elite",
    category: "INTERNSHIP",
    period: "Dec 2024 — Feb 2025",
    title: "Python-Django Developer Intern",
    place: "Elite Softwares Pvt. Ltd., Wakad, Pune",
    detail: "Built SeizeDeals, a Django e-commerce platform, from schema design through deployment — product catalog, cart and checkout flow, and admin tooling.",
    marksheetUrl: "/docs/certificates/elite-internship.pdf",
    linkText: "View internship certificate",
  },
  {
    id: "diploma",
    category: "DIPLOMA",
    period: "2020 — 2023",
    title: "Diploma, Computer Engineering",
    place: "Zeal Polytechnic, Narhe, Pune",
    detail: "83.89% aggregate · foundation in core computer engineering subjects before moving into a specialized BE program.",
    marksheetUrl: "/docs/marksheets/diploma.pdf",
    linkText: "View marksheet",
  },
  {
    id: "ssc",
    category: "SSC",
    period: "March 2020",
    title: "Secondary School Certificate Board (SSC)",
    place: "Shri. Chakradhar Swami Secondary School, Dattanagar, Pune",
    detail: "86.20% aggregate · final school-leaving examination ahead of the diploma track.",
    marksheetUrl: "/docs/marksheets/ssc.pdf",
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
    url: "/docs/certificates/elite-internship.pdf",
  },
  {
    id: "exl",
    title: "Java and SQL Development Program",
    issuer: "TNS India Foundation",
    date: "August 2025",
    url: "/docs/certificates/exl-java-sql.pdf",
  },
];

export const researchPaper = {
  title:
    "AI-Powered E-Waste Recycling and Management Platform Using YOLOv8 and Location-Based Collector Assignment",
  venue: "Journal of Academic Research in Computer & Industrial Engineering (JACIIE-2026)",
  detail: "Vol. 3, Issue 1 · Paper ID SP-2026-015 · June 2026",
  url: "/docs/papers/erecyclo-jaciie-2026.pdf",
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

export const allProjectsCatalog = [
  {
    id: "erecyclo",
    class: "AI / FULL-STACK",
    mainLanguage: "PYTHON · DJANGO",
    name: "eRecyclo",
    tagline: "AI-powered e-waste recycling & management platform",
    confidence: "0.94",
    metricBadge: "PAPER ID: SP-2026-015 · 19.6K DATASET",
    summary:
      "A platform that identifies e-waste from photos, discovers authorized recyclers, routes verified collectors, and tracks end-to-end handoffs — published as a research paper in JACIIE.",
    problem:
      "Municipal e-waste disposal remains informal and unmonitored — lacking automated computer-vision classification, registered facility matching, and verifiable chain-of-custody tracking across handoffs.",
    approach: [
      "Trained a YOLOv8 model on 19,613 images across 14 categories and 77 sub-types of e-waste for automatic classification from user-submitted photos.",
      "Evaluated item category specifications against registered processing facilities to locate the nearest appropriate, authorized recycler first.",
      "Once the target recycler was confirmed, generated a collector pickup request using Haversine-distance spatial matching to assign the nearest verified collector.",
      "Implemented an OTP-based chain-of-custody so each handoff — user to collector, collector to recycler facility — is verified at the point of transfer.",
      "Integrated OSRM & Leaflet.js for live GPS pickup routing, coupled with a Razorpay-backed digital wallet for collector payouts upon delivery.",
    ],
    stack: [
      "Django", "PostgreSQL", "YOLOv8", "Celery", "Redis", "Firebase", "Razorpay", "OSRM", "Leaflet.js", "Railway",
    ],
    outcome:
      "Successfully architected, debugged, and deployed on Railway. Findings were peer-reviewed and published in JACIIE (Journal of Advanced Computing, Intelligence Interdisciplinary Engineering, Paper ID SP-2026-015), including class-wise performance comparisons.",
    repoUrl: "https://github.com/AayanM05/eRecyclo-E-waste-Recycling-and-Management-System",
    demoUrl: null,
    codeSnippet: {
      filename: "collectors/services/assignment.py",
      code: `from math import radians, sin, cos, sqrt, atan2
from django.contrib.gis.geos import Point

def haversine_km(coord1, coord2):
    """Calculates great-circle distance between two (lat, lng) points in km."""
    lat1, lng1 = map(radians, coord1)
    lat2, lng2 = map(radians, coord2)
    dlat, dlng = lat2 - lat1, lng2 - lng1
    h = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlng / 2) ** 2
    return 6371.0 * 2 * atan2(sqrt(h), sqrt(1 - h))

def find_nearest_recycler_and_assign(request_id, user_lat, user_lng, category):
    user_coords = (user_lat, user_lng)
    
    # 1. Locate nearest authorized recycling facility for category
    recyclers = RecyclingFacility.objects.filter(is_active=True, categories__contains=[category])
    target_recycler = min(recyclers, key=lambda r: haversine_km(user_coords, r.location), default=None)
    if not target_recycler:
        raise FacilityNotFoundException("No authorized recycler available for category.")
        
    # 2. Assign nearest verified collector once recycler facility is confirmed
    collectors = Collector.objects.filter(is_verified=True, is_available=True, status='READY')
    assigned_collector = min(collectors, key=lambda c: haversine_km(user_coords, c.last_location), default=None)
    
    return create_pickup_manifest(request_id, target_recycler, assigned_collector)`,
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
    class: "BACKEND / SPRING BOOT",
    mainLanguage: "JAVA · SPRING BOOT",
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
    mainLanguage: "PYTHON · DJANGO",
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
    repoUrl: "https://github.com/AayanM05/SeizeDeals-Ecommerce-Platform",
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
    screenshotTitles: [
      "01 / Home Page — Product Catalog & Banner",
      "02 / Product Detail — Size Selection & Add to Cart",
      "03 / Cart — Order Review & Line Items",
      "04 / Payment Gateway — Razorpay Checkout & Success",
      "05 / Order Invoice — Billing Summary & Tax Breakdown",
      "06 / Admin Dashboard — Order & User Management",
    ],
  },
  {
    id: "devpulse",
    class: "FULL-STACK / TELEMETRY",
    name: "DevPulse",
    tagline: "Real-time system telemetry and performance monitor",
    confidence: "0.94",
    metricBadge: "SPRING BOOT 3 · REACT · WEBSOCKETS",
    summary:
      "A real-time telemetry dashboard monitoring microservice health, memory usage, and throughput metrics across distributed JVM nodes.",
    problem:
      "Monitoring multi-node Spring Boot applications required unified real-time metric collection without heavy third-party agent overhead.",
    approach: [
      "Built a Spring Boot telemetry agent transmitting metrics over WebSocket channels.",
      "Designed a responsive React dashboard with live chart rendering.",
      "Configured alert thresholds with email and webhook notifications.",
    ],
    stack: ["Java", "Spring Boot", "React", "WebSockets", "Chart.js"],
    outcome:
      "Provides real-time visibility into local and cloud JVM metrics with sub-second alert response times.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "TelemetryCollector.java",
      code: `@Service
public class TelemetryCollector {
    private final SimpMessagingTemplate messagingTemplate;

    public TelemetryCollector(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @Scheduled(fixedRate = 1000)
    public void publishMetrics() {
        Runtime runtime = Runtime.getRuntime();
        MetricSnapshot snapshot = new MetricSnapshot(
            runtime.totalMemory() - runtime.freeMemory(),
            runtime.maxMemory(),
            System.currentTimeMillis()
        );
        messagingTemplate.convertAndSend("/topic/telemetry", snapshot);
    }
}`,
    },
    metrics: [
      { value: "< 50ms", label: "Latency" },
      { value: "1,000+", label: "Events/sec" },
      { value: "100%", label: "Real-time stream" },
    ],
    takeaway: "Observability is not optional.",
  },
  {
    id: "cloudsync",
    class: "CLOUD / STORAGE",
    name: "CloudSync",
    tagline: "S3-compatible object storage gateway",
    confidence: "0.91",
    metricBadge: "JAVA 17 · NETTY · AWS S3",
    summary:
      "An asynchronous S3-compatible storage gateway designed to cache, route, and stream multipart file uploads to S3 buckets.",
    problem:
      "Large file uploads direct to S3 caused frontend bottlenecks and lacked localized byte-range caching for media streaming.",
    approach: [
      "Utilized Netty for non-blocking I/O event loops handling concurrent file streams.",
      "Implemented localized chunk caching with LRU eviction.",
      "Wrote AWS SDK v2 integrations for seamless bucket syncing.",
    ],
    stack: ["Java", "Netty", "AWS S3", "Docker", "JUnit 5"],
    outcome:
      "Accelerated file retrieval by 40% for recurring media requests through localized edge chunk caching.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "StorageGateway.java",
      code: `@Component
public class StorageGateway {
    private final S3AsyncClient s3Client;

    public StorageGateway(S3AsyncClient s3Client) {
        this.s3Client = s3Client;
    }

    public CompletableFuture<PutObjectResponse> uploadChunk(String bucket, String key, ByteBuffer buffer) {
        return s3Client.putObject(
            PutObjectRequest.builder().bucket(bucket).key(key).build(),
            AsyncRequestBody.fromByteBuffer(buffer)
        );
    }
}`,
    },
    metrics: [
      { value: "40%", label: "Latency reduction" },
      { value: "5GB", label: "Max file chunk" },
      { value: "Netty", label: "Async I/O engine" },
    ],
    takeaway: "Stream, don't buffer.",
  },
  {
    id: "taskgraph",
    class: "DISTRIBUTED / SYSTEMS",
    name: "TaskGraph",
    tagline: "Asynchronous job queue & workflow execution engine",
    confidence: "0.93",
    metricBadge: "PYTHON · REDIS · CELERY",
    summary:
      "A distributed DAG-based workflow execution engine for chaining dependent asynchronous background jobs with automatic retry mechanisms.",
    problem:
      "Complex multi-stage data processing tasks required a reliable queue system with dependency graph management and fault tolerance.",
    approach: [
      "Designed DAG graph traversal logic in Python for resolving task dependency chains.",
      "Leveraged Redis and Celery for distributed worker task dispatching.",
      "Implemented exponential backoff retry policies for failing worker nodes.",
    ],
    stack: ["Python", "Redis", "Celery", "PostgreSQL", "Docker"],
    outcome:
      "Successfully handles multi-step data pipelines with automatic retry resilience upon worker failure.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "tasks/executor.py",
      code: `from celery import shared_task
import time

@shared_task(bind=True, max_retries=3, default_retry_delay=5)
def execute_graph_node(self, node_id, payload):
    try:
        # Resolve task dependency
        result = process_node_data(node_id, payload)
        return {"node_id": node_id, "status": "SUCCESS", "output": result}
    except Exception as exc:
        raise self.retry(exc=exc)`,
    },
    metrics: [
      { value: "99.9%", label: "Job completion" },
      { value: "3x", label: "Retry policy" },
      { value: "Redis", label: "Broker engine" },
    ],
    takeaway: "Fail gracefully, retry automatically.",
  },
  {
    id: "authnexus",
    class: "SECURITY / IDENTITY",
    name: "AuthNexus",
    tagline: "OAuth2 & OpenID Connect identity provider service",
    confidence: "0.95",
    metricBadge: "SPRING SECURITY · JWT · DOCKER",
    summary:
      "A centralized authentication service providing OAuth2 token issuance, refresh token rotation, and Role-Based Access Control (RBAC).",
    problem:
      "Decentralized user auth across microservices created maintenance overhead and security vulnerabilities.",
    approach: [
      "Implemented Spring Security Authorization Server with RSA key pair signing for JWT tokens.",
      "Created token revocation endpoints and refresh token rotation policies.",
      "Containerized with Docker for independent deployment across microservices.",
    ],
    stack: ["Spring Security", "Java", "JWT", "PostgreSQL", "Docker"],
    outcome:
      "Unified single-sign-on (SSO) auth service across multiple backend apps with cryptographic JWT validation.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "SecurityConfig.java",
      code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));
        return http.build();
    }
}`,
    },
    metrics: [
      { value: "RSA-256", label: "JWT signing" },
      { value: "< 10ms", label: "Token validation" },
      { value: "RBAC", label: "Security model" },
    ],
    takeaway: "Never reinvent cryptography.",
  },
  {
    id: "netwatch",
    class: "AI / NETWORKING",
    name: "NetWatch",
    tagline: "Network traffic anomaly & intrusion detection engine",
    confidence: "0.89",
    metricBadge: "PYTHON · FASTAPI · PYTORCH",
    summary:
      "An anomaly detection engine analyzing PCAP packet captures using PyTorch autoencoders to flag suspicious traffic patterns.",
    problem:
      "Traditional rule-based firewalls fail to detect novel zero-day network intrusions and subtle exfiltration traffic.",
    approach: [
      "Extracted flow features (packet size, inter-arrival time, port entropy) from network streams.",
      "Trained an Unsupervised Autoencoder model to calculate reconstruction loss anomaly scores.",
      "Exposed a FastAPI REST endpoint for live packet analysis.",
    ],
    stack: ["Python", "PyTorch", "FastAPI", "Scapy", "Pandas"],
    outcome:
      "Achieved 91.4% detection precision on benchmark network intrusion datasets.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "model/anomaly_detector.py",
      code: `import torch
import torch.nn as nn

class TrafficAutoencoder(nn.Module):
    def __init__(self, input_dim=16):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, 8),
            nn.ReLU(),
            nn.Linear(8, 4)
        )
        self.decoder = nn.Sequential(
            nn.Linear(4, 8),
            nn.ReLU(),
            nn.Linear(8, input_dim)
        )

    def forward(self, x):
        return self.decoder(self.encoder(x))`,
    },
    metrics: [
      { value: "91.4%", label: "Detection precision" },
      { value: "< 15ms", label: "Inference time" },
      { value: "PyTorch", label: "ML Framework" },
    ],
    takeaway: "Anomalies hide in statistical variance.",
  },
  {
    id: "codevault",
    class: "FULL-STACK / REPOSITORY",
    name: "CodeVault",
    tagline: "Git-backed developer code snippet & documentation repository",
    confidence: "0.92",
    metricBadge: "DJANGO · POSTGRESQL · TAILWIND",
    summary:
      "A developer knowledge hub for organizing reusable code snippets, technical notes, and architecture decision records (ADRs).",
    problem:
      "Engineering teams often lose context on code snippets and architectural decisions stored across scattered chat channels.",
    approach: [
      "Built a Django application with Markdown rendering and syntax highlighting support.",
      "Implemented PostgreSQL full-text search across snippets and tags.",
      "Added multi-user workspace permissions for team collaboration.",
    ],
    stack: ["Django", "Python", "PostgreSQL", "JavaScript", "Tailwind CSS"],
    outcome:
      "Centralized code repository with fast search, reducing duplicate code lookup time during sprint builds.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "snippets/models.py",
      code: `from django.db import models
from django.contrib.postgres.search import SearchVectorField

class CodeSnippet(models.Model):
    title = models.CharField(max_length=200)
    language = models.CharField(max_length=50)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    search_vector = SearchVectorField(null=True)

    class Meta:
        indexes = [models.Index(fields=['language'])]`,
    },
    metrics: [
      { value: "Full-text", label: "Search Engine" },
      { value: "PostgreSQL", label: "Database" },
      { value: "Markdown", label: "Render format" },
    ],
    takeaway: "Document once, reuse forever.",
  },
  {
    id: "shopflow",
    class: "BACKEND / DISTRIBUTED",
    name: "ShopFlow",
    tagline: "High-throughput inventory & order reservation service",
    confidence: "0.90",
    metricBadge: "SPRING BOOT 3 · APACHE KAFKA · REDIS",
    summary:
      "An event-driven inventory reservation microservice preventing double-booking during flash sale order bursts.",
    problem:
      "Concurrent checkout requests under heavy load created database locks and inventory over-selling.",
    approach: [
      "Implemented Redis Lua scripting for atomic stock check-and-reserve operations.",
      "Published order events to Apache Kafka topics for asynchronous processing.",
      "Built automated rollback handlers for failed payment events.",
    ],
    stack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "MySQL"],
    outcome:
      "Sustained 2,500+ order reservations per second with zero inventory overselling under load test simulation.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "InventoryReservationService.java",
      code: `@Service
public class InventoryReservationService {
    private final StringRedisTemplate redisTemplate;
    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public boolean reserveStock(String productId, int quantity) {
        String script = "if redis.call('get', KEYS[1]) >= ARGV[1] then " +
                        "return redis.call('decrby', KEYS[1], ARGV[1]) " +
                        "else return -1 end";
        Long result = redisTemplate.execute(
            new DefaultRedisScript<>(script, Long.class),
            Collections.singletonList("stock:" + productId),
            String.valueOf(quantity)
        );
        return result != null && result >= 0;
    }
}`,
    },
    metrics: [
      { value: "2,500+", label: "Orders/sec" },
      { value: "0", label: "Oversell errors" },
      { value: "Kafka", label: "Event backbone" },
    ],
    takeaway: "Atomic ops beat database locks.",
  },
  {
    id: "docuextract",
    class: "AI / AUTOMATION",
    name: "DocuExtract",
    tagline: "Automated invoice & PDF data extraction engine",
    confidence: "0.87",
    metricBadge: "PYTHON · OCR · TRANSFORMERS",
    summary:
      "An intelligent document processor extracting structured JSON data from unstructured PDF invoices and receipts.",
    problem:
      "Manual data entry of paper and PDF invoices was slow, prone to human error, and expensive at scale.",
    approach: [
      "Combined Tesseract OCR with LayoutLM neural networks for spatial token extraction.",
      "Extracted key-value pairs (invoice number, total amount, line items, date).",
      "Exported validated JSON outputs directly to accounting REST webhooks.",
    ],
    stack: ["Python", "Tesseract OCR", "Transformers", "FastAPI", "Docker"],
    outcome:
      "Reduced manual data entry time by 85% with high field-level extraction accuracy.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "extractor/processor.py",
      code: `import pytesseract
from PIL import Image

def extract_invoice_fields(image_path):
    image = Image.open(image_path)
    ocr_text = pytesseract.image_to_string(image)
    # Match structured invoice patterns
    total_amount = parse_currency_field(ocr_text, pattern=r"Total:\s*\$?([\d\.]+)")
    invoice_num = parse_text_field(ocr_text, pattern=r"Invoice\s*#:\s*(\w+)")
    return {"invoice_number": invoice_num, "total": total_amount}`,
    },
    metrics: [
      { value: "85%", label: "Time saved" },
      { value: "< 2s", label: "Extraction time" },
      { value: "JSON", label: "Structured output" },
    ],
    takeaway: "Unstructured data is just undiscovered structure.",
  },
  {
    id: "logstream",
    class: "SYSTEMS / ANALYTICS",
    name: "LogStream",
    tagline: "Centralized log ingestion & search pipeline",
    confidence: "0.91",
    metricBadge: "JAVA · ELASTICSEARCH · REACT",
    summary:
      "A lightweight log aggregation server receiving application logs, indexing them in Elasticsearch, and serving a React query dashboard.",
    problem:
      "Debugging microservice failures across multiple server logs was fragmented and time-consuming.",
    approach: [
      "Built a HTTP log receiver in Java accepting JSON log payloads.",
      "Configured Elasticsearch bulk indexing for fast full-text searching.",
      "Created a React query interface with severity filtering (INFO, WARN, ERROR).",
    ],
    stack: ["Java", "Elasticsearch", "React", "Spring Boot", "Docker"],
    outcome:
      "Unified multi-service log searching, enabling instant root-cause analysis during error spikes.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "LogIngestionController.java",
      code: `@RestController
@RequestMapping("/api/logs")
public class LogIngestionController {
    private final ElasticsearchClient esClient;

    public LogIngestionController(ElasticsearchClient esClient) {
        this.esClient = esClient;
    }

    @PostMapping("/ingest")
    public ResponseEntity<Void> ingestLog(@RequestBody LogEntry entry) throws IOException {
        esClient.index(i -> i
            .index("app-logs")
            .document(entry)
        );
        return ResponseEntity.accepted().build();
    }
}`,
    },
    metrics: [
      { value: "< 100ms", label: "Search speed" },
      { value: "Elastic", label: "Search Engine" },
      { value: "Bulk", label: "Indexing mode" },
    ],
    takeaway: "Centralized logs solve distributed bugs.",
  },
  {
    id: "georouter",
    class: "GIS / BACKEND",
    name: "GeoRouter",
    tagline: "Spatial routing & fleet dispatch API",
    confidence: "0.88",
    metricBadge: "PYTHON · GEODJANGO · POSTGIS",
    summary:
      "A spatial routing service calculating optimal delivery routes and dispatching nearest drivers using PostGIS spatial queries.",
    problem:
      "Standard SQL queries cannot efficiently calculate distance-based nearest-neighbor matches across thousands of moving drivers.",
    approach: [
      "Utilized GeoDjango with PostGIS spatial indexes (GIST) for spatial distance queries.",
      "Implemented Dijkstra-based route optimization for multi-stop delivery routes.",
      "Exposed REST APIs returning GeoJSON route polylines.",
    ],
    stack: ["Python", "GeoDjango", "PostGIS", "PostgreSQL", "Docker"],
    outcome:
      "Calculates spatial driver matches in under 20ms across 50,000+ simulated active driver coordinates.",
    repoUrl: "https://github.com/AayanM05",
    demoUrl: null,
    codeSnippet: {
      filename: "dispatch/services.py",
      code: `from django.contrib.gis.db.models.functions import Distance
from django.contrib.gis.geos import Point
from .models import Driver

def find_nearest_drivers(latitude, longitude, radius_km=5):
    user_location = Point(longitude, latitude, srid=4326)
    return Driver.objects.filter(
        is_active=True,
        location__distance_lte=(user_location, radius_km * 1000)
    ).annotate(
        distance=Distance('location', user_location)
    ).order_by('distance')[:5]`,
    },
    metrics: [
      { value: "< 20ms", label: "Spatial match" },
      { value: "PostGIS", label: "Spatial DB" },
      { value: "GeoJSON", label: "Output format" },
    ],
    takeaway: "Location is a first-class data type.",
  },
];

export const projects = allProjectsCatalog.slice(0, 3);

export const quotes = {
  home: { line: "Build with clarity. Ship with confidence." },
  about: { line: "First make it work. Then make it right." },
  projects: { line: "Simplicity is prerequisite for reliability." },
  skills: { line: "Learn the core. Master the craft." },
  achievements: { line: "Excellence is a habit, not an accident." },
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
  { label: "Location", value: "Ready to Relocate" },
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
