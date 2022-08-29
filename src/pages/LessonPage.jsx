import Lesson from "../components/ui/Lesson";
import AppLayout from "../layouts/AppLayout";

function LessonPage() {
    return (
      <AppLayout>
        <div className="p-3">
            <h1 className="mb-4 pb-3 border-b text-4xl">Lessons</h1>

            <section>
              <Lesson lesson={1} name='Introduction' />
              <Lesson lesson={2} name='Basic Words' />
            </section>
        </div>
      </AppLayout>
    );
  }
  
  export default LessonPage;
  