package com.dangki.prerentation.controller.admin;


import com.dangki.data.dto.ClassRoomDto;
import com.dangki.data.entities.ClassRoom;
import com.dangki.service.ClassRoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link ClassRoom}.
 */
@RestController
@RequestMapping("/api")
public class ClassRoomResource {

    private final Logger log = LoggerFactory.getLogger(ClassRoomResource.class);

    private final ClassRoomService classRoomService;

    public ClassRoomResource(ClassRoomService classRoomService) {
        this.classRoomService = classRoomService;
    }

    /**
     * {@code POST  /class-rooms} : Create a new classRoom.
     *
     * @param classRoom the classRoom to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new classRoom, or with status {@code 400 (Bad Request)} if the classRoom has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/class-rooms")
    public ResponseEntity<List<ClassRoomDto>> createClassRoom(@Valid @RequestBody List<ClassRoomDto> classRoom) throws URISyntaxException {
        log.debug("REST request to save ClassRoom : {}", classRoom);
        List<ClassRoomDto> result = classRoomService.add(classRoom);
        return ResponseEntity.ok()
            .body(result);
    }

    /**
     * {@code PUT  /class-rooms} : Updates an existing classRoom.
     *
     * @param classRoom the classRoom to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated classRoom,
     * or with status {@code 400 (Bad Request)} if the classRoom is not valid,
     * or with status {@code 500 (Internal Server Error)} if the classRoom couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/class-rooms")
    public ResponseEntity<ClassRoom> updateClassRoom(@Valid @RequestBody ClassRoom classRoom) throws URISyntaxException {
        log.debug("REST request to update ClassRoom : {}", classRoom);
        ClassRoom result = classRoomService.update(classRoom);
        return ResponseEntity.ok()
            .body(result);
    }

    /**
     * {@code GET  /class-rooms} : get all the classRooms.
     *
     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of classRooms in body.
     */
    @GetMapping("/class-rooms")
    public ResponseEntity<List<ClassRoom>> getAllClassRooms(Pageable pageable, @RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get a page of ClassRooms");
        Page<ClassRoom> page;
        if (eagerload) {
            page = classRoomService.findAllWithEagerRelationships(pageable);
        } else {
            page = classRoomService.findAll(pageable);
        }
        return ResponseEntity.ok().body(page.getContent());
    }

    /**
     * {@code GET  /class-rooms/:id} : get the "id" classRoom.
     *
     * @param id the id of the classRoom to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the classRoom, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/class-rooms/{id}")
    public ResponseEntity<ClassRoom> getClassRoom(@PathVariable Long id) {
        log.debug("REST request to get ClassRoom : {}", id);
        Optional<ClassRoom> classRoom = classRoomService.findOne(id);
        return ResponseEntity.ok(classRoom.get());
    }

    /**
     * {@code DELETE  /class-rooms/:id} : delete the "id" classRoom.
     *
     * @param id the id of the classRoom to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/class-rooms/{id}")
    public void deleteClassRoom(@PathVariable Long id) {
        log.debug("REST request to delete ClassRoom : {}", id);
        classRoomService.delete(id);
    }
}
