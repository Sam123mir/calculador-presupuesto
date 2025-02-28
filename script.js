document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth <= 768;

    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            cancelIcon: { enabled: true },
            classes: 'shepherd-theme-custom', 
            scrollTo: { behavior: 'smooth', block: 'center' },
            arrow: false
        }
    });

    tour.addStep({
        id: 'ingreso',
        text: 'Aquí pondrás tus ingresos mensuales. Ejemplo: <b>3000 soles</b>',
        attachTo: { element: '#ingreso', on: isMobile ? 'bottom' : 'right' },
        buttons: [
            { text: 'Siguiente ➡️', action: tour.next }
        ]
    });

    tour.addStep({
        id: 'servicios',
        text: 'Aquí agregas los servicios generales (Ejemplo: Luz, Agua, Internet).',
        attachTo: { element: '#servicios', on: isMobile ? 'bottom' : 'right' },
        buttons: [
            { text: '⬅️ Anterior', action: tour.back },
            { text: 'Siguiente ➡️', action: tour.next }
        ]
    });

    tour.addStep({
        id: 'gastos-aparte',
        text: 'Aquí puedes registrar gastos adicionales como comida, transporte, etc.',
        attachTo: { element: '#gastosApartes', on: isMobile ? 'bottom' : 'right' },
        buttons: [
            { text: '⬅️ Anterior', action: tour.back },
            { text: 'Siguiente ➡️', action: tour.next }
        ]
    });

    tour.addStep({
        id: 'saldo-restante',
        text: '<b>Aquí aparecerá el total de ganancias mensuales, con los gastos ya descontados.</b>',
        attachTo: { element: '#resultadoFinal', on: isMobile ? 'bottom' : 'right' },
        buttons: [
            { text: '⬅️ Anterior', action: tour.back },
            { text: 'Finalizar ✅', action: tour.complete }
        ]
    });

    // Iniciar el tutorial al cargar la página
    tour.start();
});
