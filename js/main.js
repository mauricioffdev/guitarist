/*
  Maurício Filho — Guitarist EPK
  Progressive enhancements: navigation, click-to-load video, photo lightbox and email copy.
*/
(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const siteMenu = document.querySelector("#site-menu");

  // Accessible mobile navigation.
  if (menuToggle && siteMenu) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      siteMenu.classList.remove("is-open");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      siteMenu.classList.toggle("is-open", !isOpen);
    });

    siteMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 921px)").matches) closeMenu();
    });
  }

  // YouTube facade: only create the remote iframe after an explicit click.
  document.querySelectorAll(".video-player[data-video-id]").forEach((player) => {
    const facade = player.querySelector(".video-facade");
    if (!facade) return;

    facade.addEventListener("click", () => {
      const videoId = player.dataset.videoId;
      const title = player.dataset.videoTitle || "YouTube video";
      if (!videoId || !/^[\w-]+$/.test(videoId)) return;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.title = title;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      player.replaceChildren(iframe);
    }, { once: true });
  });

  // Fullscreen photo viewer: captions and alt text come from the actual gallery item.
  const gallery = document.querySelector("#photo-gallery");
  const lightbox = document.querySelector("#photo-lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const lightboxCounter = document.querySelector("#lightbox-counter");
  const photoButtons = gallery ? Array.from(gallery.querySelectorAll(".photo-card__button")) : [];
  let activePhotoIndex = 0;

  const readPhoto = (index) => {
    const button = photoButtons[index];
    if (!button) return;
    const image = button.querySelector("img");
    const caption = button.closest(".photo-card")?.querySelector("figcaption")?.innerText.replace(/\s+/g, " ").trim();
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = caption || image.alt || "Live photograph";
    lightboxCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(photoButtons.length).padStart(2, "0")}`;
  };

  const movePhoto = (direction) => {
    if (!photoButtons.length) return;
    activePhotoIndex = (activePhotoIndex + direction + photoButtons.length) % photoButtons.length;
    readPhoto(activePhotoIndex);
  };

  if (gallery && lightbox && lightboxImage && lightboxCaption && lightboxCounter) {
    photoButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        activePhotoIndex = index;
        readPhoto(activePhotoIndex);
        if (typeof lightbox.showModal === "function") {
          lightbox.showModal();
        } else {
          lightbox.setAttribute("open", "");
        }
      });
    });

    lightbox.querySelector(".lightbox__close")?.addEventListener("click", () => lightbox.close());
    lightbox.querySelector(".lightbox__nav--prev")?.addEventListener("click", () => movePhoto(-1));
    lightbox.querySelector(".lightbox__nav--next")?.addEventListener("click", () => movePhoto(1));

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.close();
    });

    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        movePhoto(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        movePhoto(1);
      }
    });
  }

  // Copy-to-clipboard with a fallback for older browsers and non-secure local previews.
  const copyButton = document.querySelector(".copy-email");
  const copyStatus = document.querySelector(".copy-status");

  if (copyButton && copyStatus) {
    copyButton.addEventListener("click", async () => {
      const email = copyButton.dataset.copyEmail;
      let copied = false;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
          copied = true;
        } else {
          const input = document.createElement("textarea");
          input.value = email;
          input.setAttribute("readonly", "");
          input.style.position = "fixed";
          input.style.opacity = "0";
          document.body.append(input);
          input.select();
          copied = document.execCommand("copy");
          input.remove();
        }
      } catch (error) {
        copied = false;
      }

      copyStatus.textContent = copied ? "Email copied to clipboard." : "Copy failed — please select the email address.";
      copyButton.innerHTML = copied ? "Copied <span aria-hidden=\"true\">✓</span>" : "Copy email <span aria-hidden=\"true\">⧉</span>";
    });
  }

  // Keep the displayed copyright year current without changing the static source.
  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
