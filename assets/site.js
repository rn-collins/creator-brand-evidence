// Shared: mobile nav toggle + inject nav/footer so pages stay consistent.
(function(){
  var NAV = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="nav">
    <div class="nav-in">
      <a class="brand" href="index.html">Evidence<span>&middot;</span>Studio</a>
      <button class="nav-toggle" aria-label="Menu">&#9776;</button>
      <nav class="nav-links">
        <a href="services.html">Services</a>
        <a href="creator-brand-evidence-audit.html">The Audit</a>
        <a href="method.html">Method</a>
        <a href="insights.html">Insights</a>
        <a href="about.html">About</a>
        <a class="btn" href="contact.html">Request an Audit</a>
      </nav>
    </div>
  </div>`;

  var FOOT = `
  <footer class="footer">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="brand" style="color:#fff">Evidence&middot;Studio</div>
          <p style="margin-top:.6em;max-width:34ch;color:#a7a29a">Evidence-based brand &amp; creator strategy for trust-sensitive markets. Research, governance, disclosure, and measurable brand decisions.</p>
        </div>
        <div class="foot-cols">
          <h4>Services</h4>
          <a href="creator-brand-evidence-audit.html">Creator + Brand Evidence Audit</a>
          <a href="partnership-strategy-sprint.html">Partnership Strategy Sprint</a>
          <a href="governance-brand-systems.html">Governance + Brand Systems</a>
          <a href="thought-leader-system.html">Thought-Leader System</a>
          <a href="retainer.html">Advisory Retainer</a>
        </div>
        <div class="foot-cols">
          <h4>Explore</h4>
          <a href="method.html">Method</a>
          <a href="audit-deliverables.html">Audit Deliverables</a>
          <a href="insights.html">Insights</a>
          <a href="about.html">About</a>
          <a href="curriculum-dashboard.html">Capability Dashboard</a>
        </div>
        <div class="foot-cols">
          <h4>Start</h4>
          <a href="contact.html">Request an Audit</a>
          <a href="contact.html">Book a Consult</a>
          <a href="services.html">All Services</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>&copy; <span id="yr"></span> Evidence&middot;Studio &mdash; Rayven-Nikkita Collins LLC</span>
        <span>Built on marketing science, consumer psychology, platform studies, and FTC guidance.</span>
      </div>
      <div class="foot-bottom">
        <span>Built by <a href="https://aloha-ai-consulting.vercel.app" target="_blank" rel="noopener">Aloha AI</a>. Explore all AI tools and projects at <a href="https://rn-portfolio-khaki.vercel.app" target="_blank" rel="noopener">RN Builds</a>.</span>
      </div>
    </div>
  </footer>`;

  function mount(){
    var n=document.getElementById('nav'); if(n) n.innerHTML=NAV;
    var f=document.getElementById('footer'); if(f) f.innerHTML=FOOT;
    var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
    var t=document.querySelector('.nav-toggle');
    if(t) t.addEventListener('click',function(){document.querySelector('.nav-links').classList.toggle('open');});
    // mark active. This used to set a.style.color directly, which painted the
    // accent-green nav button's label in accent green on accent green — a 1:1
    // ratio, i.e. invisible — on whichever page was current. aria-current also
    // tells a screen reader what the colour was trying to say.
    var here=(location.pathname.split('/').pop()||'index.html');
    document.querySelectorAll('.nav-links a').forEach(function(a){
      if(a.getAttribute('href')===here) a.setAttribute('aria-current','page');
    });
  }
  if(document.readyState!=='loading') mount();
  else document.addEventListener('DOMContentLoaded',mount);
})();
