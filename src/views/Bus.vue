<!-- eslint-disable max-len -->
<template>
  <div class="bus">
    <page-heading>Шина</page-heading>
    <page-text>Компьютерная ши́на (англ. computer bus) в архитектуре компьютера — соединение, служащее для передачи данных между функциональными блоками компьютера. В устройстве шины можно различить механический, электрический (физический) и логический (управляющий) уровни.</page-text>
    <page-text>В отличие от соединения точка-точка, к шине обычно можно подключить несколько устройств по одному набору проводников. Каждая шина определяет свой набор разъёмов (соединений) для физического подключения устройств, карт и кабелей.</page-text>
    <page-text>Компьютерные шины ранних вычислительных машин представляли собой жгуты (пучки соединительных проводов — сигнальных и питания, для компактности и удобства обслуживания увязанных вместе), реализующие параллельные электрические шины с несколькими подключениями. В современных вычислительных системах данный термин используется для любых физических механизмов, предоставляющих такую же логическую функциональность, как параллельные компьютерные шины.</page-text>
    <page-text>Современные компьютерные шины используют как параллельные, так и последовательные соединения и могут иметь параллельные (англ. multidrop) и цепные (англ. daisy chain) топологии. В случае USB и некоторых других шин могут также использоваться хабы (концентраторы).</page-text>
    <page-text>Некоторые виды скоростных шин (Fibre Channel, InfiniBand, скоростной Ethernet, SDH) для передачи сигналов используют не электрические соединения, а оптические.</page-text>
    <page-text>Присоединители к шине, разнообразные разъёмы, как правило, унифицированы и позволяют подключить различные устройства к шине.</page-text>
    <page-text>Управление передачей по шине реализуется как на уровне прохождения сигнала (мультиплексоры, демультиплексоры, буферы, регистры, шинные формирователи), так и со стороны ядра операционной системы — в таком случае в его состав входит соответствующий драйвер.</page-text>
    <page-section heading="Описание шин"/>
    <page-text>Шины бывают параллельными (данные переносятся потактово словами: каждый бит — отдельным проводником) и последовательными (биты данных переносятся поочерёдно по каналу, например, паре проводников).</page-text>
    <page-text>Большинство компьютеров имеет как внутренние, так и внешние шины. Внутренняя шина подключает все внутренние компоненты компьютера к материнской плате (и, следовательно, к процессору и памяти). Такой тип шин также называют локальной шиной, поскольку она служит для подключения локальных устройств. Внешняя шина подключает внешнюю периферию к материнской плате.</page-text>
    <page-text>Сетевые соединения, такие, как Ethernet, обычно не рассматриваются как шины, хотя разница больше концептуальная, чем практическая. Появление технологий InfiniBand и HyperTransport ещё больше размыло границу между сетями и шинами.</page-text>
    <page-section heading="Примеры внутренних компьютерных шин"/>
    <page-subheading>Параллельные</page-subheading>
    <page-list disc :list-items="[
      'Проприетарная Asus Media Bus[en], использовалась на некоторых материнских платах ASUS с Socket 7 и представляла собой шину ISA в специфическом разъеме, размещенном в одну линию с разъемом шины PCI.',
      'CAMAC для измерительных систем (instrumentation systems)',
      'Extended ISA или EISA',
      'Industry Standard Architecture или ISA',
      'Low Pin Count или LPC',
      'MicroChannel или MCA',
      'MBus',
      'Multibus для промышленных систем',
      'NuBus или IEEE 1196',
      'OPTi local bus, использовалась для ранних материнских плат для Intel 80486',
      'Peripheral Component Interconnect или PCI, также PCI-X',
      'S-100 bus или IEEE 696, использовалась в Altair и похожих микрокомпьютерах',
      'SBus или IEEE 1496',
      'VESA Local Bus или VLB или VL-bus, использовалась в основном на материнских платах для 80486 процессоров и была подключена непосредственно к выводам микропроцессора. Однако встречалась и реализация этой шины в сочетании с ЦПУ IBM BL3 (аналог i386SX) и ранними Pentium',
      'VMEbus, VERSAmodule Eurocard bus',
      'STD Bus для 8- и 16-битных микропроцессорных систем',
      'Unibus',
      'Q-Bus'
    ]"/>
    <page-subheading>Последовательные</page-subheading>
    <page-list disc :list-items="[
      '1-Wire',
      'HyperTransport',
      'I²C',
      'PCI Express или PCIe',
      'Serial Peripheral Interface Bus или шина SPI',
      'USB, Universal Serial Bus, чаще используется как внешняя',
      'FireWire, i.Link, IEEE 1394, чаще используется как внешняя',
      'Direct Media Interface (DMI)',
      'Intel QuickPath Interconnect или просто QuickPath (QPI)',
      'SATA/SAS'
    ]"/>
    <page-section heading="Примеры внешних компьютерных шин"/>
    <page-list disc :list-items="[
      'Advanced Technology Attachment или ATA (также известна как PATA, IDE, EIDE, ATAPI) — шина для подключения дисковой и ленточной периферии.',
      'SATA, Serial ATA — современный вариант ATA',
      'USB, Universal Serial Bus, используется для множества внешних устройств',
      'HIPPI, HIgh Performance Parallel Interface',
      'IEEE-488, GPIB (General-Purpose Instrumentation Bus), HPIB, (Hewlett-Packard Instrumentation Bus)',
      'PC card, ранее известная как PCMCIA, часто используется в ноутбуках и других портативных компьютерах, но теряет своё значение с появлением USB и встраиванием сетевых карт и модемов',
      'SCSI, Small Computer System Interface, шина для подключения дисковых и ленточных накопителей',
      'Serial Attached SCSI, SAS — современный вариант SCSI'
    ]"/>
    <page-section heading="Примеры универсальных компьютерных шин"/>
    <page-list disc :list-items="[
      'Futurebus',
      'InfiniBand',
      'QuickRing',
      'SCI'
    ]"/>
    <page-section heading="Как выглядит шина"/>
    <page-carousel :images="[
      'bus1.jpg',
      'bus2.jpg',
      'bus3.jpg'
    ]"/>
  </div>
</template>

<script>
import PageCarousel from '../components/PageCarousel.vue';
import PageList from '../components/PageList.vue';
import PageSubheading from '../components/PageSubheading.vue';
import PageSection from '../components/PageSection.vue';
import PageText from '../components/PageText.vue';
import PageHeading from '../components/PageHeading.vue';

export default {
  name: 'Bus',
  components: {
    PageHeading,
    PageText,
    PageSection,
    PageSubheading,
    PageList,
    PageCarousel,
  },
};
</script>

<style scoped lang="scss">

</style>
